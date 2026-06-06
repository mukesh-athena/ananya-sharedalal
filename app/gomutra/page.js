import GomutraHeader from '@/components/layout/GomutraHeader'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Cow Urine Chronicles',
  description: 'An independent research archive examining how history is invoked in the ways gomutra is discussed in Indian media \u2014 and how the public responds.',
  openGraph: {
    title: 'Cow Urine Chronicles | Ananya Sharedalal',
    description: 'An independent research archive examining how history is invoked in the ways gomutra is discussed in Indian media \u2014 and how the public responds.',
    images: ['/images/hero.png'],
  },
}

const sections = [
  { href: '/gomutra/research', label: 'Research', title: 'Data & Methodology', description: '83 YouTube videos classified and analysed \u2014 the corpus, the methodology, and the key statistical findings.' },
  { href: '/gomutra/themes', label: 'Themes', title: 'Recurring Themes', description: 'Five patterns that surface across the dataset: from Vedic antiquity as the only valid history, to the West as a surprising validator.' },
  { href: '/gomutra/videos', label: 'Videos', title: 'Video Commentary', description: 'Curated clips from the corpus \u2014 with close readings of what each reveals about how a singular (flattened) historical narrative is used to influence.' },
  { href: '/gomutra/mentions', label: 'Mentions', title: 'Talks & Mentions', description: 'Where this research has been presented and discussed \u2014 from Microsoft Research to Heidelberg.' },
  { href: '/gomutra/paper', label: 'Paper', title: 'The Full Paper', description: 'The complete research paper \u2014 methodology, findings, and implications of how YouTube\u2019s gomutra discourse is quietly rewriting Indian history.' },
]

export default function GomutraHomePage() {
  return (
    <>
      <GomutraHeader />
      <main style={{ backgroundColor: 'var(--offwhite)', color: 'var(--inkbrown)' }}>
        <section style={{ position: 'relative', width: '100%', height: '100vh', minHeight: '600px', overflow: 'hidden' }}>
          <Image src="/images/hero.png" alt="Manuscript hero" fill priority sizes="100vw" style={{ objectFit: 'cover', objectPosition: 'center' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(30,18,8,0.35) 0%, rgba(30,18,8,0.25) 40%, rgba(30,18,8,0.75) 100%)' }}></div>
          <div style={{ position: 'relative', zIndex: 2, height: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
            <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--turmeric)', marginBottom: '1.5rem' }}>A Research Archive</p>
            <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(3rem, 8vw, 6.5rem)', lineHeight: 1.02, fontWeight: 500, color: 'var(--parchment)', marginBottom: '2rem', maxWidth: '900px' }}>Cow Urine<br />Chronicles</h1>
            <p style={{ fontFamily: 'Crimson Text, serif', fontSize: 'clamp(1.1rem, 1.6vw, 1.35rem)', lineHeight: 1.6, color: 'rgba(245,237,214,0.85)', maxWidth: '720px', marginBottom: '2.5rem' }}>How has history been invoked in the ways gomutra gets talked about on the media, and how does the Indian public react to hearing what YouTube influencers claim history is?</p>
            <Link href="/gomutra/research" style={{ fontFamily: 'Crimson Text, serif', fontSize: '0.95rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--parchment)', textDecoration: 'none', padding: '0.9rem 1.8rem', border: '1px solid rgba(245,237,214,0.5)', borderRadius: '2px', transition: 'all 0.3s ease', display: 'inline-block' }}>{'Begin Reading \u2192'}</Link>
          </div>
        </section>

        <section style={{ maxWidth: '820px', margin: '0 auto', padding: '8rem 2rem 6rem', textAlign: 'center' }}>
          <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--turmeric)', marginBottom: '1.5rem' }}>About the Project</p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.2, fontWeight: 500, color: 'var(--inkbrown)', marginBottom: '2rem' }}>A digital ethnography of an unusual corner of Indian YouTube</h2>
          <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '1.15rem', lineHeight: 1.75, color: 'var(--stone)' }}>{'This archive documents an 18-month study under the mentorship of Prof Joyojeet Pal along with a team of international researchers of how cow urine consumption is framed, defended, and historicised across 83 YouTube videos. It maps the recurring tropes, the appeals to antiquity, and the surprising appearances of Western science \u2014 tracing how a contested practice is rebuilt as tradition in the digital public square.'}</p>
        </section>

        <section style={{ backgroundColor: 'var(--parchment)', padding: '6rem 2rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--turmeric)', marginBottom: '1rem', textAlign: 'center' }}>Explore the Archive</p>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.2, fontWeight: 500, color: 'var(--inkbrown)', textAlign: 'center', marginBottom: '4rem' }}>Five ways to enter the corpus</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              {sections.map((s) => (
                <Link key={s.href} href={s.href} style={{ display: 'block', padding: '2.5rem 2rem', backgroundColor: 'var(--offwhite)', border: '1px solid #E8DFD0', borderRadius: '4px', textDecoration: 'none', color: 'inherit', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
                  <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '0.75rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--turmeric)', marginBottom: '1rem' }}>{s.label}</p>
                  <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.7rem', lineHeight: 1.2, fontWeight: 500, color: 'var(--inkbrown)', marginBottom: '1rem' }}>{s.title}</h3>
                  <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '1rem', lineHeight: 1.65, color: 'var(--stone)', marginBottom: '1.5rem' }}>{s.description}</p>
                  <span style={{ fontFamily: 'Crimson Text, serif', fontSize: '0.85rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--terracotta)' }}>{'Read more \u2192'}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section style={{ maxWidth: '780px', margin: '0 auto', padding: '8rem 2rem', textAlign: 'center' }}>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.5rem, 2.6vw, 2rem)', lineHeight: 1.5, fontStyle: 'italic', color: 'var(--inkbrown)', marginBottom: '2rem' }}>{'\u201CThe past is never neutral. What gets called tradition is always a choice \u2014 and online, those choices are made in public.\u201D'}</p>
          <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--stone)' }}>Ananya Sharedalal</p>
        </section>
      </main>
      <Footer />
    </>
  )
}




