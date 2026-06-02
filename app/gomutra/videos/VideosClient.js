'use client'

import Header from '@/components/layout/GomutraHeader'
import Footer from '@/components/layout/Footer'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const videos = [
  {
    id: 1,
    youtubeId: 'rjMbE9flUhQ',
    title: 'Cow Urine Magic! Hidden Secret in Gaumutra Explained',
    speaker: 'Dhruv Rathee',
    channel: 'Dhruv Rathee',
    subscribers: '28.5M',
    views: '8.1M',
    stance: 'Debunker',
    explanation: 'The move is deliberate. Rathee is not attacking the ancient claim \u2014 he is bypassing it. By replicating the same "miracle" with his own urine, he shows the trick is basic chemistry, meaning the historical pedigree of cow urine isn\u2019t doing any of the work the promoters say it is.',
  },
  {
    id: 2,
    youtubeId: 'QvGlY-gGGaI',
    title: 'Know the countless benefits of drinking cow urine',
    speaker: 'Baba Ramdev',
    channel: 'Swami Ramdev',
    subscribers: '11.2M',
    views: '10.4M',
    stance: 'Promoter',
    explanation: '"Nectar-like medicine\u2026 offering of all the gods and goddesses." This isn\u2019t really a medical sentence at all. It\u2019s a religious one wearing medical clothes. By the time he\u2019s called the substance an offering to deities, he\u2019s left the realm of testable claims entirely.',
  },
  {
    id: 3,
    youtubeId: 'SBHcG5qj7fg',
    title: 'Is There Really Gold in Cow Urine? Debunking the Myth',
    speaker: 'Dr Ram Punyani',
    channel: 'KintuParantuSAF',
    subscribers: '151K',
    views: '3.3M',
    stance: 'Debunker',
    explanation: '"This has been glorified for a reason, and there\u2019s politics behind it too." Instead of arguing whether cow urine works, the speaker historicises the promotion. His critique is structural \u2014 about who benefits from the claim \u2014 rather than chemical or textual.',
  },
  {
    id: 4,
    youtubeId: '8nDDBoWTo8k',
    title: 'Surprising benefits of cow urine, America has made medicine',
    speaker: 'Sudhir Chaudhary',
    channel: 'Aaj Tak',
    subscribers: '71.4M',
    views: '55K',
    stance: 'Neutral/News',
    explanation: '"A patent has already been obtained for using cow urine to manufacture medicines for cancer\u2026" The patent does all the work here. Just saying the word "patent" makes the claim sound officially approved, even though nothing was ever actually proved.',
  },
  {
    id: 5,
    youtubeId: 'YM_f0DD8fTg',
    title: 'Many people have experienced this and America has granted it a patent',
    speaker: 'Baba Ramdev',
    channel: 'Swami Ramdev HD',
    subscribers: '1.13M',
    views: '32K',
    stance: 'Promoter',
    explanation: 'Two unrelated things are stacked next to each other so that they reinforce each other. Personal anecdotes and an American patent get treated as if they\u2019re the same kind of evidence \u2014 but together they sound like a case.',
  },
  {
    id: 6,
    youtubeId: 'X6VWGgRn2N8',
    title: 'These countries understand India\u2019s centuries-old Ayurveda',
    speaker: 'Sushant Sinha',
    channel: 'Times Now Navbharat',
    subscribers: '23.7M',
    views: '621K',
    stance: 'Promoter',
    explanation: '"These are the countries that understand the power of India\u2019s centuries-old Ayurveda, but our people consider it a joke." The speaker shifts the argument away from whether cow urine works to whether Indians are loyal.',
  },
  {
    id: 7,
    youtubeId: 'm69y2P9oY3c',
    title: 'Benefits of cow urine (Gomutra) \u2014 home remedies',
    speaker: 'Lotus Pregnancy Care',
    channel: 'Lotus Pregnancy Care',
    subscribers: '29.7K',
    views: '128K',
    stance: 'Promoter',
    explanation: 'The speaker stacks three impressive names \u2014 NIH, AYUSH, an "International Journal" \u2014 into one breath. The volume of acronyms is meant to feel like institutional consensus. Nothing about what those bodies actually concluded is described, because the names alone are the argument.',
  },
  {
    id: 8,
    youtubeId: 'rN9qAZXModc',
    title: 'ANSI Herbal Gaumutra \u2014 certified by the World Health Organization',
    speaker: 'B.K. Sahu',
    channel: 'LEarning INDIA-BK',
    subscribers: '4.7K',
    views: 'N/A',
    stance: 'Promoter',
    explanation: '"The herbal cow urine by ANSI is certified by the World Health Organization." The WHO is one of the most over-cited authorities on Indian YouTube \u2014 partly because the audience won\u2019t go check. The certification claim is left vague, no document shown, no date given.',
  },
  {
    id: 9,
    youtubeId: 'uoMmwL_NCms',
    title: 'IIT Bombay PhD Dr. Rakesh Agarwal on cow urine',
    speaker: 'Rakesh Agarwal',
    channel: 'Technical Farming',
    subscribers: '3.24M',
    views: '2.4M',
    stance: 'Promoter',
    explanation: '"And in the Vedas, it is given the status of Amrit, Amrit means which does not let die, which is a life-saving drug." Three different frames \u2014 Vedic theology, IIT credentials, and modern medicine \u2014 none of them are made to check each other.',
  },
  {
    id: 10,
    youtubeId: '3byvrK_UQ0U',
    title: 'Truth about Gomutra (Cow Urine) \u2014 Science or Myth?',
    speaker: 'Akshay Chopra',
    channel: 'We R Stupid',
    subscribers: '1.2M',
    views: '32K',
    stance: 'Neutral/Explainer',
    explanation: 'The speaker spreads the claim across continents on purpose. If the practice is only Indian, critics can call it Hindu pseudoscience. If it\u2019s universal, attacking it is like attacking all of human history. The vagueness is what makes the claim unfightable.',
  },
  {
    id: 11,
    youtubeId: 'xngT71JsqVk',
    title: 'Cow urine benefits, precautions \u2014 complete information',
    speaker: 'Dr. Raj Satpute',
    channel: 'Jyovis Ayurveda by Dr. Raj',
    subscribers: '159K',
    views: '5.2K',
    stance: 'Promoter',
    explanation: '"For thousands of years, cow urine has been used to prevent and eradicate incurable diseases from their root." The longevity of a practice is substituted for proof of its efficacy. Neither claim is defended in the sentence.',
  },
  {
    id: 12,
    youtubeId: 'X6VWGgRn2N8',
    title: 'Agenda-driven people attacked ancient practices',
    speaker: 'Sushant Sinha',
    channel: 'Times Now Navbharat',
    subscribers: '23.7M',
    views: '621K',
    stance: 'Promoter',
    explanation: '"Have the agenda-driven people specifically attacked the ancient practices by dismissing what Ayurveda says?" "Agenda-driven" lets him skip past the substance of any critique. "Attacked" changes intellectual disagreement into violence against a community.',
  },
]

const stanceColors = {
  'Promoter': '#A44F2F',
  'Debunker': '#7A8C6E',
  'Neutral/News': '#8A8075',
  'Neutral/Explainer': '#8A8075',
}

function VideoCard({ video }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.08 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: 'var(--offwhite)',
        border: '1px solid #E8DFD0',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        opacity: visible ? 1 : 0,
        transform: visible
          ? hovered ? 'translateY(-4px)' : 'translateY(0)'
          : 'translateY(28px)',
        boxShadow: hovered
          ? '0 12px 40px rgba(30,18,8,0.12)'
          : '0 0px 0px rgba(0,0,0,0)',
        transition: 'opacity 0.7s ease, transform 0.4s ease, box-shadow 0.4s ease',
      }}
    >
      <div style={{ aspectRatio: '16/9', backgroundColor: '#E8DFD0', flexShrink: 0 }}>
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${video.youtubeId}`}
          title={video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ display: 'block' }}
        />
      </div>

      <div style={{ padding: '1.75rem 2rem 2rem', flex: 1 }}>
        <div style={{
          display: 'flex',
          gap: '0.75rem',
          alignItems: 'center',
          flexWrap: 'wrap',
          marginBottom: '1rem',
        }}>
          <span style={{
            fontFamily: 'Crimson Text, serif',
            fontSize: '0.7rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--offwhite)',
            backgroundColor: stanceColors[video.stance] || '#8A8075',
            padding: '0.15rem 0.6rem',
          }}>
            {video.stance}
          </span>
          <span style={{
            fontFamily: 'Crimson Text, serif',
            fontSize: '0.82rem',
            color: 'var(--stone)',
          }}>
            {video.views} views {'\u00B7'} {video.subscribers} subscribers
          </span>
        </div>

        <p style={{
          fontFamily: 'Crimson Text, serif',
          fontSize: '0.78rem',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'var(--turmeric)',
          marginBottom: '0.4rem',
        }}>
          {video.speaker} {'\u00B7'} {video.channel}
        </p>

        <h3 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
          fontWeight: 500,
          color: 'var(--inkbrown)',
          marginBottom: '1rem',
          lineHeight: 1.3,
        }}>
          {video.title}
        </h3>

        <div style={{
          width: '28px',
          height: '2px',
          backgroundColor: 'var(--turmeric)',
          marginBottom: '1rem',
        }}></div>

        <p style={{
          fontFamily: 'Crimson Text, serif',
          fontSize: '0.98rem',
          lineHeight: 1.8,
          color: 'var(--stone)',
          fontStyle: 'italic',
        }}>
          {video.explanation}
        </p>
      </div>
    </div>
  )
}

export default function VideosPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '0' }}>

        {/* Hero */}
        <section style={{
          minHeight: '50vh',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          padding: '9rem 2rem 5rem',
          overflow: 'hidden',
        }}>
          <Image
            src="/images/videos-hero.png"
            alt="Ancient Indian alley"
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
              From the Corpus
            </p>
            <h1 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(3rem, 6vw, 5.5rem)',
              fontWeight: 400,
              lineHeight: 1.05,
              color: 'var(--parchment)',
              marginBottom: '0.5rem',
            }}>
              Videos &
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
              Commentary
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
              {'12 clips from the corpus \u2014 with close readings of what each reveals about how history, science, and authority are constructed in the Gomutra discourse.'}
            </p>
          </div>
        </section>

        {/* 2-column video grid */}
        <section style={{
          padding: '4rem 2rem 5rem',
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))',
            gap: '1.5rem',
            alignItems: 'start',
          }}>
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}