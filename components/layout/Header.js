'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const transparent = !scrolled
  const bgColor = transparent ? 'transparent' : 'var(--offwhite)'
  const borderColor = transparent ? 'transparent' : '#E8DFD0'
  const logoColor = transparent ? 'var(--parchment)' : 'var(--inkbrown)'
  const navColor = (active) => {
    if (transparent) return active ? 'var(--turmeric)' : 'rgba(245,237,214,0.7)'
    return active ? 'var(--turmeric)' : 'var(--stone)'
  }

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      backgroundColor: bgColor,
      borderBottom: `1px solid ${borderColor}`,
      padding: '0 2rem',
      transition: 'background-color 0.4s ease, border-color 0.4s ease',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '72px',
      }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <span style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '1.1rem',
            fontWeight: 600,
            color: logoColor,
            letterSpacing: '0.02em',
            transition: 'color 0.4s ease',
          }}>
            Ananya Sharedalal
          </span>
        </Link>

        <nav style={{ display: 'flex', gap: '2rem' }} className="desktop-nav">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: 'Crimson Text, serif',
                fontSize: '1rem',
                color: navColor(pathname === link.href),
                textDecoration: 'none',
                borderBottom: pathname === link.href ? '1px solid var(--turmeric)' : '1px solid transparent',
                paddingBottom: '2px',
                transition: 'color 0.3s ease',
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'none',
            flexDirection: 'column',
            gap: '5px',
            padding: '4px',
          }}
          aria-label="Toggle menu"
        >
          <span style={{ display: 'block', width: '24px', height: '1.5px', backgroundColor: transparent ? 'var(--parchment)' : 'var(--inkbrown)', transition: 'background-color 0.4s ease' }} />
          <span style={{ display: 'block', width: '24px', height: '1.5px', backgroundColor: transparent ? 'var(--parchment)' : 'var(--inkbrown)', transition: 'background-color 0.4s ease' }} />
          <span style={{ display: 'block', width: '16px', height: '1.5px', backgroundColor: transparent ? 'var(--parchment)' : 'var(--inkbrown)', transition: 'background-color 0.4s ease' }} />
        </button>
      </div>

      {menuOpen && (
        <div style={{
          backgroundColor: 'var(--offwhite)',
          borderTop: '1px solid #E8DFD0',
          padding: '1.5rem 2rem',
        }}>
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                fontFamily: 'Crimson Text, serif',
                fontSize: '1.1rem',
                color: pathname === link.href ? 'var(--turmeric)' : 'var(--inkbrown)',
                padding: '0.6rem 0',
                borderBottom: '1px solid #E8DFD0',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  )
}