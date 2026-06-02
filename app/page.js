'use client'

import Header from '@/components/layout/Header'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { db } from '@/lib/firebase'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'

export default function WorkPage() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProjects() {
      try {
        const q = query(collection(db, 'projects'), orderBy('order'))
        const snapshot = await getDocs(q)
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        setProjects(data)
      } catch (err) {
        console.error('Error fetching projects:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchProjects()
  }, [])

  function getProjectLink(project) {
    if (project.status !== 'active') return null
    if (project.externalLink) return { type: 'external', href: project.externalLink }
    if (project.slug === 'gomutra') return { type: 'internal', href: '/gomutra' }
    if (project.slug === 'asha') return { type: 'internal', href: '/asha' }
    return null
  }

  function getThumbnail(project) {
    if (project.thumbnail) return project.thumbnail
    if (project.slug === 'gomutra') return '/images/hero.png'
    if (project.slug === 'asha') return '/images/asha-hero.png'
    return null
  }

  return (
    <>
      <Header />
      <main style={{ paddingTop: '0' }}>
        <section style={{ backgroundColor: 'var(--inkbrown)', minHeight: '100vh', display: 'flex', alignItems: 'flex-end', padding: '4rem 2rem 5rem', position: 'relative', overflow: 'hidden' }}>
          <Image src="/images/home-hero.png" alt="Aged parchment texture" fill priority sizes="100vw" style={{ objectFit: 'cover', objectPosition: 'center', zIndex: 0 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(30,18,8,0.88) 0%, rgba(30,18,8,0.75) 40%, rgba(30,18,8,0.55) 100%)', zIndex: 1 }}></div>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 60%, transparent 0%, rgba(30,18,8,0.4) 90%)', zIndex: 1 }}></div>
          <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 2 }}>
            <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '0.8rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--turmeric)', marginBottom: '1.5rem' }}>{'Independent Researcher \u00B7 Mumbai'}</p>
            <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(4rem, 8vw, 8rem)', fontWeight: 400, lineHeight: 1.0, color: 'var(--parchment)', marginBottom: '0.25rem' }}>Ananya</h1>
            <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(4rem, 8vw, 8rem)', fontWeight: 400, lineHeight: 1.0, fontStyle: 'italic', color: 'var(--turmeric)', marginBottom: '3rem' }}>Sharedalal</h1>
            <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--turmeric)', marginBottom: '2rem' }}></div>
            <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '1.15rem', lineHeight: 1.8, color: 'rgba(245,237,214,0.65)', maxWidth: '560px' }}>12th grade student at a residential school. My research and projects examine historical narratives, developmental economics, and broader social issues.</p>
          </div>
        </section>

        <section style={{ padding: '6rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '0.8rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--turmeric)', marginBottom: '0.75rem' }}>Research and Work</p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: 'var(--inkbrown)', marginBottom: '4rem' }}>Projects</h2>
          {loading ? (
            <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '1.1rem', color: 'var(--stone)', fontStyle: 'italic' }}>Loading...</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {projects.map((project, index) => {
                const link = getProjectLink(project)
                const thumb = getThumbnail(project)
                return (
                  <div key={project.id} style={{ display: 'grid', gridTemplateColumns: thumb ? '60px 140px 1fr auto' : '60px 1fr auto', gap: '2rem', padding: '3.5rem 0', borderBottom: '1px solid #E8DFD0', alignItems: 'center' }}>
                    <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3.5rem', fontWeight: 300, color: 'rgba(30,18,8,0.08)', lineHeight: 1, userSelect: 'none' }}>{String(index + 1).padStart(2, '0')}</p>
                    {thumb && (
                      <div style={{ position: 'relative', width: '140px', height: '140px', overflow: 'hidden', borderRadius: '2px', backgroundColor: 'var(--parchment)' }}>
                        <Image src={thumb} alt={project.title} fill sizes="140px" style={{ objectFit: 'cover', objectPosition: 'center' }} />
                      </div>
                    )}
                    <div>
                      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                        <span style={{ fontFamily: 'Crimson Text, serif', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--offwhite)', backgroundColor: project.status === 'active' ? 'var(--terracotta)' : 'var(--stone)', padding: '0.15rem 0.6rem' }}>{project.status === 'active' ? 'Active' : 'Coming Soon'}</span>
                        <span style={{ fontFamily: 'Crimson Text, serif', fontSize: '0.85rem', color: 'var(--stone)' }}>{project.year}</span>
                      </div>
                      <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 500, color: 'var(--inkbrown)', marginBottom: '0.5rem', lineHeight: 1.2 }}>{project.title}</h2>
                      <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '1rem', color: 'var(--stone)', fontStyle: 'italic', marginBottom: '0.75rem' }}>{project.subtitle}</p>
                      <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '1rem', lineHeight: 1.7, color: 'var(--stone)', maxWidth: '600px' }}>{project.description}</p>
                    </div>
                    <div>
                      {link ? (
                        link.type === 'external' ? (
                          <a href={link.href} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '0.75rem 1.5rem', backgroundColor: 'var(--inkbrown)', color: 'var(--offwhite)', fontFamily: 'Crimson Text, serif', fontSize: '0.9rem', letterSpacing: '0.04em', textDecoration: 'none', whiteSpace: 'nowrap' }}>View Project</a>
                        ) : (
                          <Link href={link.href} style={{ display: 'inline-block', padding: '0.75rem 1.5rem', backgroundColor: 'var(--inkbrown)', color: 'var(--offwhite)', fontFamily: 'Crimson Text, serif', fontSize: '0.9rem', letterSpacing: '0.04em', textDecoration: 'none', whiteSpace: 'nowrap' }}>View Archive</Link>
                        )
                      ) : (
                        <span style={{ fontFamily: 'Crimson Text, serif', fontSize: '0.9rem', color: 'var(--stone)', fontStyle: 'italic' }}>Coming soon</span>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </section>

        <section style={{ backgroundColor: 'var(--inkbrown)', padding: '6rem 2rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '5rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ position: 'relative', width: '100%', maxWidth: '360px', aspectRatio: '4 / 5', overflow: 'hidden', borderRadius: '2px' }}>
                <Image src="/images/ananya.png" alt="Ananya Sharedalal" fill sizes="(max-width: 768px) 100vw, 360px" style={{ objectFit: 'cover', objectPosition: 'center' }} />
              </div>
              <div>
                <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '0.8rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--turmeric)', marginBottom: '1rem' }}>About</p>
                <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '1.1rem', lineHeight: 1.9, color: 'rgba(245,237,214,0.7)', marginBottom: '1.5rem' }}>I am a 12th grade student at a residential school with a deep interest in history and the social sciences. My research and projects focus on the construct of historical narratives, impact of developmental economics, and broader issues that affect communities.</p>
                <a href="mailto:ananyasharedalal@gmail.com" style={{ fontFamily: 'Crimson Text, serif', fontSize: '1rem', color: 'var(--turmeric)', textDecoration: 'none', letterSpacing: '0.04em' }}>ananyasharedalal@gmail.com</a>
              </div>
            </div>
            <div>
              <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--turmeric)', marginBottom: '2.5rem' }}></div>
              <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 400, fontStyle: 'italic', color: 'var(--parchment)', lineHeight: 1.4 }}>{'\u201CI always wondered what led people to believe in things that don\u2019t have concrete scientific proofs.\u201D'}</p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

