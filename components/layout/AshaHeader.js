'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/asha#abstract', label: 'Abstract' },
  { href: '/asha#findings', label: 'Findings' },
  { href: '/asha#recommendations', label: 'Policy' },
  { href: '/asha/mentions', label: 'Mentions' },
]

export default function AshaHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  const transparent = !scrolled && !menuOpen
  const bgColor = transparent ? 'transparent' : 'var(--offwhite)'
  const borderColor = transparent ? 'transparent' : '#E8DFD0'

  const navColor = (active) => {
    if (transparent) return active ? 'var(--turmeric)' : 'rgba(245,237,214,0.7)'
    return active ? 'var(--turmeric)' : 'var(--stone)'
  }

  return (
    <header style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 100,
      backgroundColor: bgColor,
      borderBottom: '1px solid ' + borderColor,
      padding: isMobile ? '0 1.25rem' : '0 2rem',
      transition: 'background-color 0.4s ease, border-color 0.4s ease',
    }}>
      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: '64px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', minWidth: 0, flex: 1 }}>
          <Link href="/" style={{
            fontFamily: 'Crimson Text, serif',
            fontSize: '0.78rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: transparent ? 'rgba(245,237,214,0.55)' : 'var(--stone)',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            transition: 'color 0.4s ease',
          }}>
            {isMobile ? '\u2190' : '\u2190 Ananya Sharedalal'}
          </Link>
          {!isMobile && (
            <span style={{ color: transparent ? 'rgba(245,237,214,0.3)' : '#D8CFC0', fontSize: '1rem' }}>|</span>
          )}
          <span style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: isMobile ? '1.05rem' : '1.15rem',
            fontWeight: 500,
            color: transparent ? 'var(--parchment)' : 'var(--inkbrown)',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}>
            ASHA Workers of Annamayya
          </span>
        </div>

        {!isMobile && (
          <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            {navLinks.map((link) => {
              const active = pathname === link.href
              return (
                <Link key={link.href} href={link.href} style={{
                  fontFamily: 'Crimson Text, serif',
                  fontSize: '0.95rem',
                  color: navColor(active),
                  textDecoration: 'none',
                  paddingBottom: '4px',
                  borderBottom: active ? '1px solid var(--turmeric)' : '1px solid transparent',
                  transition: 'color 0.3s ease, border-color 0.3s ease',
                }}>
                  {link.label}
                </Link>
              )
            })}
          </nav>
        )}

        {isMobile && (
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" style={{
            background: 'transparent', border: 'none', cursor: 'pointer',
            padding: '0.5rem', display: 'flex', flexDirection: 'column', gap: '5px', zIndex: 101,
          }}>
            <span style={{
              display: 'block', width: '24px', height: '2px',
              backgroundColor: transparent ? 'var(--parchment)' : 'var(--inkbrown)',
              transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
              transition: 'transform 0.3s ease, background-color 0.3s ease',
            }} />
            <span style={{
              display: 'block', width: '24px', height: '2px',
              backgroundColor: transparent ? 'var(--parchment)' : 'var(--inkbrown)',
              opacity: menuOpen ? 0 : 1,
              transition: 'opacity 0.3s ease, background-color 0.3s ease',
            }} />
            <span style={{
              display: 'block', width: '24px', height: '2px',
              backgroundColor: transparent ? 'var(--parchment)' : 'var(--inkbrown)',
              transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
              transition: 'transform 0.3s ease, background-color 0.3s ease',
            }} />
          </button>
        )}
      </div>

      {isMobile && menuOpen && (
        <div style={{
          position: 'fixed', top: '64px', left: 0, right: 0, bottom: 0,
          backgroundColor: 'var(--offwhite)', zIndex: 99,
          padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem',
        }}>
          {navLinks.map((link) => {
            const active = pathname === link.href
            return (
              <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.6rem', fontWeight: 400,
                color: active ? 'var(--turmeric)' : 'var(--inkbrown)',
                textDecoration: 'none',
                borderBottom: '1px solid #E8DFD0', paddingBottom: '1rem',
              }}>
                {link.label}
              </Link>
            )
          })}
        </div>
      )}
    </header>
  )
}
