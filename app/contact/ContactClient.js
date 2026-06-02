'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Image from 'next/image'

const reasons = [
  {
    label: 'Research Inquiries',
    description: 'Questions about Cow Urine Chronicles or other ongoing work.',
  },
  {
    label: 'Collaboration Proposals',
    description: 'Academic, journalistic, or policy-related opportunities.',
  },
  {
    label: 'Media Requests',
    description: 'Interviews, citations, talks, and public engagements.',
  },
  {
    label: 'General Questions',
    description: 'Curious students, researchers, and readers are welcome.',
  },
]

export default function ContactPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '0' }}>

        {/* Hero */}
        <section style={{
          minHeight: '45vh',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          padding: '9rem 2rem 5rem',
          overflow: 'hidden',
        }}>
          <Image
            src="/images/contact-hero.png"
            alt="Ancient writing desk"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(30,18,8,0.88)',
            zIndex: 1,
          }}></div>
          <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 3 }}>
            <p style={{
              fontFamily: 'Crimson Text, serif',
              fontSize: '0.8rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--turmeric)',
              marginBottom: '1.5rem',
            }}>
              Get in Touch
            </p>
            <h1 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(3rem, 6vw, 5.5rem)',
              fontWeight: 400,
              lineHeight: 1.05,
              color: 'var(--parchment)',
              marginBottom: '2.5rem',
            }}>
              Contact
            </h1>
            <div style={{
              width: '40px',
              height: '2px',
              backgroundColor: 'var(--turmeric)',
              marginBottom: '2rem',
            }}></div>
            <p style={{
              fontFamily: 'Crimson Text, serif',
              fontSize: '1.2rem',
              lineHeight: 1.8,
              color: 'rgba(245,237,214,0.7)',
              maxWidth: '580px',
            }}>
              For research inquiries, collaboration proposals, media requests, or general questions about my work.
            </p>
          </div>
        </section>

        {/* Contact content — email left, reasons right */}
        <section style={{
          padding: '5rem 2rem',
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '5rem',
          alignItems: 'start',
        }}>

          {/* LEFT — bio + email */}
          <div>
            <p style={{
              fontFamily: 'Crimson Text, serif',
              fontSize: '1.15rem',
              lineHeight: 1.9,
              color: 'var(--inkbrown)',
              marginBottom: '2rem',
            }}>
              {"Feel free to reach out directly \u2014 whether you're a researcher, journalist, student, or just curious about my work."}
            </p>
            <div className="divider"></div>
            <p style={{
              fontFamily: 'Crimson Text, serif',
              fontSize: '0.85rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--stone)',
              marginTop: '1.5rem',
              marginBottom: '0.4rem',
            }}>
              Email
            </p>
            <a
              href="mailto:ananyasharedalal@gmail.com"
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.5rem',
                color: 'var(--turmeric)',
                textDecoration: 'none',
                display: 'inline-block',
                wordBreak: 'break-word',
              }}
            >
              ananyasharedalal@gmail.com
            </a>
          </div>

          {/* RIGHT — reach out about */}
          <div>
            <p style={{
              fontFamily: 'Crimson Text, serif',
              fontSize: '0.8rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--turmeric)',
              marginBottom: '1.25rem',
            }}>
              Reach Out About
            </p>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {reasons.map((reason, idx) => (
                <div
                  key={reason.label}
                  style={{
                    padding: '1.25rem 0',
                    borderBottom: idx < reasons.length - 1 ? '1px solid #E8DFD0' : 'none',
                  }}
                >
                  <h3 style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1.2rem',
                    fontWeight: 500,
                    color: 'var(--inkbrown)',
                    lineHeight: 1.3,
                    marginBottom: '0.35rem',
                  }}>
                    {reason.label}
                  </h3>
                  <p style={{
                    fontFamily: 'Crimson Text, serif',
                    fontSize: '0.98rem',
                    lineHeight: 1.65,
                    color: 'var(--stone)',
                  }}>
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </section>

      </main>
      <Footer />
    </>
  )
}
