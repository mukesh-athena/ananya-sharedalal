import ThemesClient from './ThemesClient'

export const metadata = {
  title: 'Recurring Themes',
  description: 'Five patterns that surface across 83 YouTube videos in the Gomutra discourse — from Vedic antiquity as the only valid history, to the West as a surprising validator.',
  openGraph: {
    title: 'Recurring Themes | Cow Urine Chronicles',
    description: 'Five patterns that surface across 83 YouTube videos in the Gomutra discourse — from Vedic antiquity as the only valid history, to the West as a surprising validator.',
    images: ['/images/themes-hero.png'],
  },
}

export default function ThemesPage() {
  return <ThemesClient />
}
