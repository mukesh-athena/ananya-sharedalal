import MentionsClient from './MentionsClient'

export const metadata = {
  title: 'Talks & Publications',
  description: "Presented at Microsoft Research Bangalore and Heidelberg University's South Asia Institute — and published in a peer-reviewed paper on LLMs and culture-specific health misinformation.",
  openGraph: {
    title: 'Talks & Publications | Cow Urine Chronicles',
    description: "Presented at Microsoft Research Bangalore and Heidelberg University's South Asia Institute — and published in a peer-reviewed paper on LLMs and culture-specific health misinformation.",
    images: ['/images/mentions-hero.png'],
  },
}

export default function MentionsPage() {
  return <MentionsClient />
}
