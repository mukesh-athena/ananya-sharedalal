'use client'

import AshaHeader from '@/components/layout/AshaHeader'
import Footer from '@/components/layout/Footer'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { db } from '@/lib/firebase'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'

function FadeUp({ children, delay = 0 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(28px)',
      transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
    }}>
      {children}
    </div>
  )
}

export default function AshaMentionsPage() {
  const [mentions, setMentions] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchMentions() {
      try {
        const q = query(collection(db, 'asha_mentions'), orderBy('order'))
        const snapshot = await getDocs(q)
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        setMentions(data)
      } catch (err) {
        console.error('Error fetching asha mentions:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchMentions()
  }, [])

  return (
    <>
      <AshaHeader />
      <main style={{ paddingTop: '0' }}>

        <section style={{ minHeight: '50vh', position: 'relative', display: 'flex', alignItems: 'center', padding: '9rem 2rem 5rem', overflow: 'hidden' }}>
          <Image
            src="/images/asha-mentions-hero.png"
            alt="Community health meeting in rural Andhra Pradesh"
            fill
            priority
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(30,18,8,0.88)', zIndex: 1 }} />
          <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 3 }}>
            <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '0.8rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--turmeric)', marginBottom: '1.5rem' }}>In the World</p>
            <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(3rem, 6vw, 5.5rem)', fontWeight: 400, lineHeight: 1.05, color: 'var(--parchment)', marginBottom: '0.5rem' }}>Talks &</h1>
            <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(3rem, 6vw, 5.5rem)', fontWeight: 400, lineHeight: 1.05, fontStyle: 'italic', color: 'var(--turmeric)', marginBottom: '2.5rem' }}>Citations</h1>
            <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--turmeric)', marginBottom: '2rem' }} />
            <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '1.2rem', lineHeight: 1.8, color: 'rgba(245,237,214,0.7)', maxWidth: '580px' }}>
              Where this research has been presented, cited, or discussed &#8212; updated as the paper moves through journal submission.
            </p>
          </div>
        </section>

        <section style={{ padding: '5rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
          {loading ? (
            <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '1.1rem', color: 'var(--stone)', fontStyle: 'italic', textAlign: 'center', padding: '4rem 0' }}>Loading...</p>
          ) : mentions.length === 0 ? (
            <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '1.1rem', color: 'var(--stone)', fontStyle: 'italic', textAlign: 'center', padding: '4rem 0' }}>
              No mentions yet &#8212; check back as this research is submitted to journals.
            </p>
          ) : (
            mentions.map((item, index) => (
              <FadeUp key={item.id} delay={index * 0.1}>
                <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: '3rem', paddingBottom: '4rem', marginBottom: '4rem', borderBottom: index < mentions.length - 1 ? '1px solid #E8DFD0' : 'none', alignItems: 'start' }}>
                  <div>
                    <span style={{ display: 'inline-block', fontFamily: 'Crimson Text, serif', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--offwhite)', backgroundColor: item.type === 'Paper' ? 'var(--inkbrown)' : 'var(--terracotta)', padding: '0.2rem 0.65rem', marginBottom: '0.6rem' }}>
                      {item.type}
                    </span>
                    <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '0.9rem', color: 'var(--stone)', lineHeight: 1.5 }}>{item.date}</p>
                  </div>
                  <div>
                    <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '0.85rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--turmeric)', marginBottom: '0.6rem' }}>{item.platform}</p>
                    <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.3rem, 2.5vw, 1.9rem)', fontWeight: 500, color: 'var(--inkbrown)', marginBottom: '1.25rem', lineHeight: 1.35 }}>{item.title}</h2>
                    <div className="divider" />
                    <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '1.05rem', lineHeight: 1.85, color: 'var(--stone)', fontStyle: 'italic', maxWidth: '680px' }}>{item.note}</p>
                    {item.link && (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: '1.5rem', fontFamily: 'Crimson Text, serif', fontSize: '0.95rem', color: 'var(--turmeric)', textDecoration: 'none', borderBottom: '1px solid var(--turmeric)', paddingBottom: '2px' }}>
                        View &#8594;
                      </a>
                    )}
                  </div>
                </div>
              </FadeUp>
            ))
          )}
        </section>

        <section style={{ backgroundColor: 'var(--inkbrown)', padding: '5rem 2rem', textAlign: 'center', marginBottom: '-4rem' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontStyle: 'italic', fontWeight: 300, color: 'var(--parchment)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              This research is ongoing. More presentations and publications are expected as the paper develops.
            </p>
            <div style={{ width: '32px', height: '1px', backgroundColor: 'var(--turmeric)', margin: '0 auto' }} />
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}