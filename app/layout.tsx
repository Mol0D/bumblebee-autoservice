import type { Metadata } from 'next';
import { Bowlby_One, Manrope, Space_Grotesk } from 'next/font/google';
import './globals.css';

const bowlbyOne = Bowlby_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-body',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-ui',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Bumblebee Autoservice — СТО Київ Теремки',
  description: 'Чесний автосервіс у Києві на Теремках-2. Діагностика, ТО, ходова, ГРМ, електрика. Прозорі ціни, гарантія до 12 місяців.',
  keywords: 'СТО Київ Теремки, автосервіс Київ, ремонт підвіски Київ, заміна ГРМ Київ, діагностика авто Київ, ТО авто Київ',
  openGraph: {
    title: 'Bumblebee Autoservice — СТО Київ Теремки',
    description: 'Чесний автосервіс у Києві. Діагностика, ТО, ходова, ГРМ — прозорі ціни та гарантія.',
    url: 'https://bumblebee.auto',
    siteName: 'Bumblebee Autoservice',
    locale: 'uk_UA',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  name: 'Bumblebee Autoservice',
  description: 'Чесний автосервіс у Києві на Теремках-2',
  url: 'https://bumblebee.auto',
  telephone: '+380000000000',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Київ',
    addressRegion: 'Голосіївський район',
    addressCountry: 'UA',
    streetAddress: 'Теремки-2',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 50.375,
    longitude: 30.45,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '19:00',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '100',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="uk"
      className={`${bowlbyOne.variable} ${manrope.variable} ${spaceGrotesk.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
