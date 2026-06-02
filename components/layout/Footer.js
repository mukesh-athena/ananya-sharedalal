import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: 'var(--inkbrown)',
      color: 'var(--parchment)',
      padding: '4rem 2rem 2rem',
      marginTop: '6rem',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '3rem',
          paddingBottom: '3rem',
          borderBottom: '1px solid rgba(245, 237, 214, 0.12)',
        }}>
          <div>
            <h3 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '1.4rem',
              fontWeight: 500,
              marginBottom: '0.75rem',
              color: 'var(--parchment)',
            }}>
              Ananya Sharedalal
            </h3>
            <p style={{
              fontFamily: 'Crimson Text, serif',
              fontSize: '0.95rem',
              color: 'var(--stone)',
              lineHeight: 1.7,
            }}>
              {`Independent researcher \u2014 Cow Urine Chronicles and beyond.`}
            </p>
          </div>

          <div>
            <h4 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '1rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--turmeric)',
              marginBottom: '1rem',
            }}>
              Navigate
            </h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                { href: '/', label: 'Home' },
                { href: '/gomutra', label: 'Cow Urine Chronicles' },
                { href: '/gomutra/research', label: 'Research' },
                { href: '/gomutra/themes', label: 'Themes' },
                { href: '/gomutra/videos', label: 'Videos' },
                { href: '/gomutra/mentions', label: 'Mentions' },
                { href: '/asha', label: 'ASHA Workers of Annamayya' },
                { href: '/asha/mentions', label: 'ASHA Mentions' },
                { href: '/contact', label: 'Contact' },
              ].map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily: 'Crimson Text, serif',
                    fontSize: '0.95rem',
                    color: 'var(--stone)',
                    textDecoration: 'none',
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '1rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--turmeric)',
              marginBottom: '1rem',
            }}>
              Contact
            </h4>
            <a
              href="mailto:ananyasharedalal@gmail.com"
              style={{
                fontFamily: 'Crimson Text, serif',
                fontSize: '0.95rem',
                color: 'var(--turmeric)',
                textDecoration: 'none',
              }}
            >
              ananyasharedalal@gmail.com
            </a>
          </div>
        </div>

        <div style={{
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <p style={{
            fontFamily: 'Crimson Text, serif',
            fontSize: '0.85rem',
            color: 'var(--stone)',
          }}>
            {`\u00A9 ${new Date().getFullYear()} Ananya Sharedalal. All rights reserved.`}
          </p>
          <p style={{
            fontFamily: 'Crimson Text, serif',
            fontSize: '0.85rem',
            color: 'var(--stone)',
            fontStyle: 'italic',
          }}>
            {`Independent Research Archive \u00B7 Mumbai`}
          </p>
        </div>
      </div>
    </footer>
  )
}
