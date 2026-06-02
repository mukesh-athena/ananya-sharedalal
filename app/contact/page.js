import ContactClient from './ContactClient'

export const metadata = {
  title: 'Contact',
  description: "Get in touch with Ananya Sharedalal — for research inquiries, collaboration proposals, media requests, or general questions about her work.",
  openGraph: {
    title: 'Contact | Ananya Sharedalal',
    description: "Get in touch with Ananya Sharedalal — for research inquiries, collaboration proposals, media requests, or general questions about her work.",
    images: ['/images/contact-hero.png'],
  },
}

export default function ContactPage() {
  return <ContactClient />
}
