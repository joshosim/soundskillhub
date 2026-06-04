import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const geistSans = Figtree({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Figtree({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://soundskillhub.com'),
  title: {
    default: 'SoundSkillHub - Premier Educational Training for Schools & Educators',
    template: '%s | SoundSkillHub',
  },
  description:
    'Transform your teaching with expert training in Nelson Handwriting, Print Handwriting, Literacy, Mathematics, and Inclusive Education. Professional development for schools across Nigeria.',
  keywords: [
    'handwriting training Nigeria',
    'Nelson handwriting training',
    'print handwriting training',
    'literacy training for teachers',
    'mathematics training',
    'inclusive education Nigeria',
    'teacher professional development',
    'educational workshops Nigeria',
    'school training programs',
    'educator training',
    'online skills training',
    'teacher training courses',
    'handwriting coaching',
    'literacy coaching',
    'math coaching',
    'inclusive education coaching',
    'professional development for educators',
    'training for Nigerian schools',
    'educational training provider',
    'teacher upskilling',
    'school improvement training',
  ],
  authors: [{ name: 'SoundSkillHub' }],
  creator: 'SoundSkillHub',
  publisher: 'SoundSkillHub',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://soundskillhub.com',
    siteName: 'SoundSkillHub',
    title: 'SoundSkillHub - Premier Educational Training for Schools & Educators',
    description:
      'Transform your teaching with expert training in Nelson Handwriting, Print Handwriting, Literacy, Mathematics, and Inclusive Education.',
    images: [
      {
        url: '/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'SoundSkillHub - Educational Training',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SoundSkillHub - Premier Educational Training',
    description:
      'Expert training in handwriting, literacy, mathematics, and inclusive education for Nigerian schools and educators.',
    images: ['/logo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'NyVCJqPmWfeLirUFpzrqO_rLSVcLmO2PrKgCcR3C4tc',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'SoundSkillHub',
    url: 'https://soundskillhub.com',
    logo: 'https://soundskillhub.com/logo.jpg',
    description:
      'Premier educational training provider specializing in handwriting, literacy, mathematics, and inclusive education for schools and educators across Nigeria.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'NG',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: ['English'],
    },
    sameAs: [
      // Add your social media URLs here when available
      'https://www.facebook.com/profile.php?id=100069979204439',
    ],
    areaServed: {
      '@type': 'Country',
      name: 'Nigeria',
    },
    offers: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Course',
          name: 'Nelson Handwriting Training',
          description:
            'Professional development training for educators in Nelson handwriting methodology.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Course',
          name: 'Print Handwriting Training',
          description: 'Expert training in print handwriting instruction techniques.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Course',
          name: 'Inclusive Education Training',
          description: 'Comprehensive training in inclusive education practices and methodologies.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Course',
          name: 'Literacy & Mathematics Training',
          description: 'Advanced training programs for literacy and mathematics instruction.',
        },
      },
    ],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffd85f" />
        <link rel="canonical" href="https://soundskillhub.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('soundskillhub-theme');var d=t?t==='dark':matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d)}catch(e){}",
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
