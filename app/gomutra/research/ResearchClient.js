'use client'

import Header from '@/components/layout/GomutraHeader'
import Footer from '@/components/layout/Footer'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const stats = [
  { number: '100', numeric: 100, suffix: '', label: 'YouTube videos in corpus' },
  { number: '83', numeric: 83, suffix: '', label: 'Videos manually coded' },
  { number: '28', numeric: 28, suffix: '', label: 'Promoter videos' },
  { number: '5\u20137', numeric: null, suffix: '', label: 'Explicit debunker videos' },
  { number: '3.1M', numeric: null, suffix: '', label: 'Avg views per debunker video' },
  { number: '680K', numeric: null, suffix: '', label: 'Avg views per promoter video' },
]

const keyFindings = [
  {
    stat: '26 of 83',
    finding: 'Videos cite ancient Ayurvedic texts by name \u2014 Charaka Samhita, Sushruta Samhita, Ashtanga Hridaya, Bhavaprakasha Nighantu.',
  },
  {
    stat: '13 videos',
    finding: 'Invoke \u201Cthousands of years ago\u201D or \u201Csince ancient times\u201D as a stand-in for evidence.',
  },
  {
    stat: '13 videos',
    finding: 'Mention rishis, sages, or ancestors as the source of authority.',
  },
  {
    stat: '0 videos',
    finding: 'Mention the Mughal or British colonial period. The middle of Indian history is entirely absent.',
  },
  {
    stat: '9 videos',
    finding: 'Reference America or Europe \u2014 not as colonisers, but as validators. \u201CEven foreign science is now saying\u2026\u201D',
  },
]

function useInView(threshold = 0.1) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])
  return [ref, inView]
}

function FadeUp({ children, delay = 0, style = {} }) {
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
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  )
}

function CountUp({ target, suffix = '', trigger }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!trigger) return
    setCount(0)
    let current = 0
    const increment = Math.ceil(target / 60)
    const timer = setInterval(() => {
      current += increment
      if (current >= target) { setCount(target); clearInterval(timer) }
      else setCount(current)
    }, 20)
    return () => clearInterval(timer)
  }, [trigger, target])
  return <>{count}{suffix}</>
}

export default function ResearchPage() {
  const [statsRef, statsVisible] = useInView()
  const [findingsRef, findingsVisible] = useInView()

  return (
    <>
      <Header />
      <main style={{ paddingTop: '0' }}>

        {/* Hero */}
        <section style={{
          minHeight: '55vh',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          padding: '9rem 2rem 5rem',
          overflow: 'hidden',
        }}>
          <Image
            src="/images/research-hero.png"
            alt="Ancient manuscripts"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(30,18,8,0.88)',
            zIndex: 1,
          }} />
          <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 3 }}>
            <p style={{
              fontFamily: 'Crimson Text, serif',
              fontSize: '0.8rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--turmeric)',
              marginBottom: '1.5rem',
            }}>
              The Work
            </p>
            <h1 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(3rem, 6vw, 5.5rem)',
              fontWeight: 400,
              lineHeight: 1.05,
              color: 'var(--parchment)',
              marginBottom: '0.5rem',
            }}>
              Research, Data
            </h1>
            <h1 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(3rem, 6vw, 5.5rem)',
              fontWeight: 400,
              lineHeight: 1.05,
              fontStyle: 'italic',
              color: 'var(--turmeric)',
              marginBottom: '2.5rem',
            }}>
              & Methodology
            </h1>
            <div style={{
              width: '40px',
              height: '2px',
              backgroundColor: 'var(--turmeric)',
              marginBottom: '2rem',
            }} />
            <p style={{
              fontFamily: 'Crimson Text, serif',
              fontSize: '1.2rem',
              lineHeight: 1.8,
              color: 'rgba(245,237,214,0.7)',
              maxWidth: '580px',
            }}>
              {'100 highly influential YouTube videos \u2014 classified manually and analysed using LLMs to examine how history is invoked, recast, and selectively remembered in the Gomutra discourse.'}
            </p>
          </div>
        </section>

        {/* Stats strip */}
        <section
          ref={statsRef}
          style={{
            backgroundColor: 'var(--parchment)',
            padding: '4rem 2rem',
            borderBottom: '1px solid #E8DFD0',
          }}
        >
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '2.5rem',
          }}>
            {stats.map((s, i) => (
              <div
                key={s.label}
                style={{
                  textAlign: 'center',
                  opacity: statsVisible ? 1 : 0,
                  transform: statsVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s`,
                }}
              >
                <p style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '3rem',
                  fontWeight: 400,
                  color: 'var(--terracotta)',
                  lineHeight: 1,
                  marginBottom: '0.5rem',
                }}>
                  {s.numeric
                    ? <CountUp target={s.numeric} suffix={s.suffix} trigger={statsVisible} />
                    : s.number
                  }
                </p>
                <p style={{
                  fontFamily: 'Crimson Text, serif',
                  fontSize: '0.85rem',
                  color: 'var(--stone)',
                  lineHeight: 1.4,
                  letterSpacing: '0.02em',
                }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Methodology + Ethical Framing */}
        <section style={{ padding: '5rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '5rem',
          }}>
            <FadeUp delay={0}>
              <h2 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '2.2rem',
                fontWeight: 400,
                marginBottom: '1rem',
                color: 'var(--inkbrown)',
              }}>
                Methodology
              </h2>
              <div className="divider" />
              <p style={{
                fontFamily: 'Crimson Text, serif',
                fontSize: '1.1rem',
                lineHeight: 1.9,
                color: 'var(--inkbrown)',
                marginBottom: '1.5rem',
              }}>
                {'The primary data source is YouTube. A video had to have at least 100 views to be included in the dataset \u2014 ensuring relevance and real audience reach.'}
              </p>
              <p style={{
                fontFamily: 'Crimson Text, serif',
                fontSize: '1.1rem',
                lineHeight: 1.9,
                color: 'var(--inkbrown)',
                marginBottom: '1.5rem',
              }}>
                {'All transcripts were translated to English using LLMs. Each translation was manually reviewed for accuracy \u2014 though some discrepancies may remain. Videos were then classified by stance (promoter, debunker, neutral), content style, narrative style, and speaker demographics.'}
              </p>
              <p style={{
                fontFamily: 'Crimson Text, serif',
                fontSize: '1.1rem',
                lineHeight: 1.9,
                color: 'var(--inkbrown)',
              }}>
                A specific focus was placed on coding the historical imagination of each video: which time periods are invoked, which are absent, and how antiquity is used as a substitute for evidence.
              </p>
            </FadeUp>

            <FadeUp delay={0.15}>
              <h2 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '2.2rem',
                fontWeight: 400,
                marginBottom: '1rem',
                color: 'var(--inkbrown)',
              }}>
                Ethical Framing
              </h2>
              <div className="divider" />
              <p style={{
                fontFamily: 'Crimson Text, serif',
                fontSize: '1.1rem',
                lineHeight: 1.9,
                color: 'var(--inkbrown)',
                marginBottom: '1.5rem',
              }}>
                {'All inferences and statements in this research are unbiased and based on observable patterns in the data \u2014 not on personal opinions. This subject is culturally and religiously sensitive, and that sensitivity has been central to how this research was conducted.'}
              </p>
              <p style={{
                fontFamily: 'Crimson Text, serif',
                fontSize: '1.1rem',
                lineHeight: 1.9,
                color: 'var(--inkbrown)',
              }}>
                {'The goal is not to adjudicate whether Gomutra works or doesn\u2019t \u2014 the goal is to understand what historical and rhetorical frameworks are being deployed, and what that tells us about how Indians relate to their own past.'}
              </p>
            </FadeUp>
          </div>
        </section>

        {/* Key findings */}
        <section style={{
          backgroundColor: 'var(--inkbrown)',
          padding: '5rem 2rem',
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <FadeUp>
              <p style={{
                fontFamily: 'Crimson Text, serif',
                fontSize: '0.8rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--turmeric)',
                marginBottom: '1rem',
              }}>
                What the data shows
              </p>
              <h2 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 400,
                fontStyle: 'italic',
                marginBottom: '1rem',
                color: 'var(--parchment)',
              }}>
                Preliminary Findings
              </h2>
              <p style={{
                fontFamily: 'Crimson Text, serif',
                fontSize: '1.1rem',
                lineHeight: 1.8,
                color: 'rgba(245,237,214,0.6)',
                maxWidth: '660px',
                marginBottom: '4rem',
              }}>
                {'Influencer content that invokes history and tradition is more likely to find an accepting audience. History is a powerful tool \u2014 and in this corpus, it is deployed with striking selectivity.'}
              </p>
            </FadeUp>

            <div ref={findingsRef} style={{ display: 'flex', flexDirection: 'column' }}>
              {keyFindings.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '200px 1fr',
                    gap: '3rem',
                    padding: '2.5rem 0',
                    borderTop: '1px solid rgba(245,237,214,0.1)',
                    alignItems: 'center',
                    opacity: findingsVisible ? 1 : 0,
                    transform: findingsVisible ? 'translateX(0)' : 'translateX(-24px)',
                    transition: `opacity 0.6s ease ${i * 0.15}s, transform 0.6s ease ${i * 0.15}s`,
                  }}
                >
                  <p style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                    fontWeight: 400,
                    color: 'var(--turmeric)',
                    lineHeight: 1,
                  }}>
                    {item.stat}
                  </p>
                  <p style={{
                    fontFamily: 'Crimson Text, serif',
                    fontSize: '1.15rem',
                    lineHeight: 1.8,
                    color: 'rgba(245,237,214,0.8)',
                    fontStyle: 'italic',
                  }}>
                    {item.finding}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Data access */}
        <section style={{ padding: '5rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
          <FadeUp>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '2.2rem',
              fontWeight: 400,
              marginBottom: '1rem',
              color: 'var(--inkbrown)',
            }}>
              Access the Data
            </h2>
            <div className="divider" />
            <p style={{
              fontFamily: 'Crimson Text, serif',
              fontSize: '1.1rem',
              lineHeight: 1.9,
              color: 'var(--inkbrown)',
              maxWidth: '640px',
              marginBottom: '2rem',
            }}>
              {'The full dataset \u2014 83 videos with transcripts, influencer metadata, classifications, and coded variables \u2014 is available for review. This includes the master dataset and three thematic breakdowns covering the Vedic frame, the role of the West, and the promoter-debunker divide.'}
            </p>
            <a
              href="https://drive.google.com/drive/folders/1D-E-04inQFja5jO9A_lrrFCyPWSMZK2E?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '0.85rem 2.25rem',
                backgroundColor: 'var(--inkbrown)',
                color: 'var(--offwhite)',
                fontFamily: 'Crimson Text, serif',
                fontSize: '1rem',
                letterSpacing: '0.04em',
                textDecoration: 'none',
              }}
            >
              {' View Full Dataset \u2192'}
            </a>
          </FadeUp>
        </section>

      </main>
      <Footer />
    </>
  )
}