import VideosClient from './VideosClient'

export const metadata = {
  title: 'Video Commentary',
  description: 'Twelve clips from the corpus — with close readings of what each reveals about how history, science, and authority are constructed in the Gomutra discourse.',
  openGraph: {
    title: 'Video Commentary | Cow Urine Chronicles',
    description: 'Twelve clips from the corpus — with close readings of what each reveals about how history, science, and authority are constructed in the Gomutra discourse.',
    images: ['/images/videos-hero.png'],
  },
}

export default function VideosPage() {
  return <VideosClient />
}
