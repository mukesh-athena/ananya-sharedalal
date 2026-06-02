'use client'

import Header from '@/components/layout/GomutraHeader'
import Footer from '@/components/layout/Footer'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const themes = [
  {
    id: 1,
    title: 'Antiquity is the only \u201Chistory\u201D that matters',
    description: 'The historical imagination of this corpus is almost exclusively pre-classical \u2014 a deep, undifferentiated \u201CVedic past\u201D treated as an unbroken tradition. 26 of 83 videos cite ancient Ayurvedic texts by name. Another 12 invoke \u201Cthousands of years ago\u201D or \u201Csince ancient times.\u201D 13 mention rishis or sages. 13 cite the Vedas. Four different ways of pointing at the same period.',
    subthemes: [
      'Named ancient texts as authority',
      'Sage / Rishi authority',
      'Time-distance / antiquity claims',
      'Cosmic / elevated terminology',
      'Sacredness, divinity, and \u201CMother Cow\u201D',
      'Institutional credentials borrowed for ancient claims',
    ],
    quote: '\u201CAnd in the Vedas, it is given the status of Amrit, Amrit means which does not let die, which is a life-saving drug.\u201D',
    speaker: 'Rakesh Agarwal',
    analysis: 'The sentence quietly slides from myth to pharmacology. Amrit is the drink of the gods but by the end of the line it has become \u201Ca life-saving drug.\u201D Vedic theology, IIT credentials, and modern medicine \u2014 none of them are made to check each other, which is what makes the move work.',
    dark: false,
  },
  {
    id: 2,
    title: 'The West appears as a validator, not destroyer',
    description: 'When America or Europe appear (9 videos), they are not the colonisers who erased traditional knowledge. They are recent ratifiers of it. \u201CAmerica granted a patent on cow urine for cancer.\u201D \u201CGermany and Singapore are importing our Ayurvedic beauty products.\u201D Modernity isn\u2019t framed as a rupture \u2014 it\u2019s framed as eventual catch-up. This is a quiet but important historiographical inversion: colonial trauma is replaced by Western endorsement.',
    subthemes: [
      'The patent as final proof',
      'Big international names as proof',
      'Export markets as quality judges',
      'Western media as a quality stamp',
      'Shame as argument \u2014 Western respect converted into Indian guilt',
    ],
    quote: '\u201CThese are the countries that understand the power of India\u2019s centuries-old Ayurveda, but our people consider it a joke.\u201D',
    speaker: 'Sushant Sinha',
    analysis: 'The speaker shifts the argument away from whether cow urine works to whether Indians are loyal. Doubting the substance gets framed as embarrassing your own country. The contradiction doesn\u2019t slow him down because the line is built to make you feel guilty.',
    dark: true,
  },
  {
    id: 3,
    title: 'Debunkers refuse to engage on historical terrain',
    description: 'This is the most consequential pattern in the dataset. Dhruv Rathee\u2019s strategy is to argue chemistry, not history \u2014 by performing the betadine trick with ordinary water and his own urine, he sidesteps the entire ancient-text argument. The skeptics treat history as irrelevant to whether chemistry works. The promoters treat chemistry as confirmation of what history already established. Because the two sides operate on different timescales, they almost never make contact.',
    subthemes: [
      'Chemistry / experiment as rebuttal',
      'Modern medical authority as the only valid frame',
      'Politics and current affairs as critique',
      'The betadine experiment as shared battleground',
    ],
    quote: '\u201CThis is the first time that I will show you the experiment of betadine in my own urine.\u201D',
    speaker: 'Dhruv Rathee',
    analysis: 'The move is deliberate. He is not attacking the ancient claim \u2014 he is bypassing it. By replicating the same \u201Cmiracle\u201D with his own urine, he shows the trick is basic chemistry, meaning the historical pedigree of cow urine isn\u2019t doing any of the work the promoters say it is. He never names a text or a sage. He doesn\u2019t need to.',
    dark: false,
  },
  {
    id: 4,
    title: 'Claims come in bundles, not alone',
    description: 'If a video says cow urine helps your liver, it almost always also says it helps your kidneys, your weight, your skin, and your digestion. Nobody promotes it for just one thing. Liver is the most common claim (23 videos), and it tends to drag the rest along with it. The promoted benefits cluster in a consistent hierarchy: mundane at the base, chronic disease claims in the middle, then grand claims at the top (cancer cure \u2014 25 videos).',
    subthemes: [
      'The \u201CRamdev formula\u201D \u2014 personal anecdote + joint/liver/weight claims',
      'Claim escalation ladder from mundane to miraculous',
      'Cancer as the apex claim',
      'Bundle credibility \u2014 low-stakes claims lending authority to high-stakes ones',
    ],
    quote: '\u201CToday\u2019s science proves what Baghbhatt ji said thousands of years ago.\u201D',
    speaker: 'Rajiv Dixit',
    analysis: 'The hierarchy is what stands out. Science doesn\u2019t test the ancient claim \u2014 it confirms it. The ancient sage is positioned as already correct and modernity just catches up. So the speaker gets to claim scientific authority without ever being subject to scientific review.',
    dark: true,
  },
  {
    id: 5,
    title: 'Two camps, two vocabularies',
    description: 'Promoters talk about Vedas, Ayurveda, immunity, and \u201Camrit/sanjeevani\u201D \u2014 these words travel together. Skeptics talk about research, studies, experiments, and chemistry \u2014 those words travel together. The two sides barely share language. This linguistic divergence is not accidental. It reflects two entirely different epistemological frameworks that happen to be fighting over the same object.',
    subthemes: [
      'Promoter vocabulary: sacred, ancient, divine, amrit',
      'Debunker vocabulary: experiment, research, chemistry, institution',
      'Wellness content as a third, neutral register',
      'Political vocabulary as a fourth lane \u2014 mostly avoided by mainstream content',
    ],
    quote: 'The question is not whether Gomutra works \u2014 the question is what we mean when we say it does.',
    speaker: '',
    analysis: 'When promoters say \u201Cit works\u201D they mean it works spiritually, ancestrally, and chemically \u2014 all at once. When debunkers say \u201Cit doesn\u2019t work\u201D they mean it fails a randomised controlled trial. These are not the same conversation.',
    dark: false,
  },
]

function Tag({ label, dark }) {
  return (
    <span
      style={{
        fontFamily: 'Crimson Text, serif',
        fontSize: '0.82rem',
        letterSpacing: '0.02em',
        padding: '0.3rem 0.85rem',
        cursor: 'default',
        border: `1px solid ${dark ? 'var(--turmeric)' : 'var(--inkbrown)'}`,
        backgroundColor: dark ? 'var(--turmeric)' : 'var(--inkbrown)',
        color: dark ? 'var(--inkbrown)' : 'var(--parchment)',
      }}
    >
      {label}
    </span>
  )
}

function ThemeBlock({ theme, index }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.08 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const bg = theme.dark ? 'var(--inkbrown)' : 'var(--offwhite)'
  const textPrimary = theme.dark ? 'var(--parchment)' : 'var(--inkbrown)'
  const textSecondary = theme.dark ? 'rgba(245,237,214,0.65)' : 'var(--stone)'
  const borderColor = theme.dark ? 'rgba(245,237,214,0.12)' : '#E8DFD0'
  const quoteBg = theme.dark ? 'rgba(245,237,214,0.06)' : 'var(--parchment)'
  const quoteText = theme.dark ? 'var(--parchment)' : 'var(--inkbrown)'
  const analysisText = theme.dark ? 'rgba(245,237,214,0.75)' : 'var(--stone)'

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: bg,
        padding: '6rem 2rem',
        borderBottom: `1px solid ${borderColor}`,
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(36px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '100px 1fr',
          gap: '2rem',
          marginBottom: '3rem',
          alignItems: 'start',
        }}>
          <p style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '5rem',
            fontWeight: 300,
            color: theme.dark ? 'rgba(245,237,214,0.1)' : 'rgba(30,18,8,0.08)',
            lineHeight: 1,
            paddingTop: '0.5rem',
            userSelect: 'none',
          }}>
            {String(index + 1).padStart(2, '0')}
          </p>
          <div>
            <p style={{
              fontFamily: 'Crimson Text, serif',
              fontSize: '0.75rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--turmeric)',
              marginBottom: '0.75rem',
            }}>
              {`Theme ${String(index + 1).padStart(2, '0')}`}
            </p>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              fontWeight: 500,
              color: textPrimary,
              lineHeight: 1.2,
              marginBottom: '1.5rem',
            }}>
              {theme.title}
            </h2>
            <p style={{
              fontFamily: 'Crimson Text, serif',
              fontSize: '1.1rem',
              lineHeight: 1.9,
              color: textSecondary,
              maxWidth: '700px',
              marginBottom: '2rem',
            }}>
              {theme.description}
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
              {theme.subthemes.map((sub) => (
                <Tag key={sub} label={sub} dark={theme.dark} />
              ))}
            </div>
          </div>
        </div>

        <div style={{
          backgroundColor: quoteBg,
          borderLeft: '3px solid var(--turmeric)',
          padding: '3rem 3.5rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '3rem',
          alignItems: 'start',
        }}>
          <div>
            <p style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(1.3rem, 2.2vw, 1.8rem)',
              fontStyle: 'italic',
              fontWeight: 400,
              color: quoteText,
              lineHeight: 1.55,
              marginBottom: '1.25rem',
            }}>
              {theme.quote}
            </p>
            {theme.speaker ? (
              <p style={{
                fontFamily: 'Crimson Text, serif',
                fontSize: '0.8rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--turmeric)',
              }}>
                {`\u2014 ${theme.speaker}`}
              </p>
            ) : null}
          </div>
          <div style={{
            borderLeft: `1px solid ${borderColor}`,
            paddingLeft: '3rem',
          }}>
            <p style={{
              fontFamily: 'Crimson Text, serif',
              fontSize: '0.75rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--turmeric)',
              marginBottom: '1rem',
            }}>
              Analysis
            </p>
            <p style={{
              fontFamily: 'Crimson Text, serif',
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: analysisText,
              fontStyle: 'italic',
            }}>
              {theme.analysis}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function ThemesPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '0' }}>
        <section style={{
          minHeight: '50vh',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          padding: '9rem 2rem 5rem',
          overflow: 'hidden',
        }}>
          <Image
            src="/images/themes-hero.png"
            alt="Ancient Indian pottery"
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
              Patterns in the Data
            </p>
            <h1 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(3rem, 6vw, 5.5rem)',
              fontWeight: 400,
              lineHeight: 1.05,
              color: 'var(--parchment)',
              marginBottom: '0.5rem',
            }}>
              Recurring
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
              Themes
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
              {'Five patterns that surface repeatedly across 83 videos \u2014 from ancient texts as the only valid authority, to the remarkable absence of 2,000 years of Indian history.'}
            </p>
          </div>
        </section>

        {themes.map((theme, index) => (
          <ThemeBlock key={theme.id} theme={theme} index={index} />
        ))}

      </main>
      <Footer />
    </>
  )
}