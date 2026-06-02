import ResearchClient from './ResearchClient'

export const metadata = {
  title: 'Research & Methodology',
  description: 'How 100 highly influential YouTube videos were classified and analysed using LLMs to examine how history is invoked, recast, and selectively remembered in the Gomutra discourse.',
  openGraph: {
    title: 'Research & Methodology | Cow Urine Chronicles',
    description: 'How 100 highly influential YouTube videos were classified and analysed using LLMs to examine how history is invoked, recast, and selectively remembered in the Gomutra discourse.',
    images: ['/images/research-hero.png'],
  },
}

export default function ResearchPage() {
  return <ResearchClient />
}

