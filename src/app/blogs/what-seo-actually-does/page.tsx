import WhatSeoActuallyDoes from '@/components/WhatSeoActuallyDoes';
import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
    title: 'What SEO Actually Does: What SEO Is & How It Works',
    description:
        'Learn what SEO actually does, what SEO is, and how SEO works to improve visibility, rankings, and long-term organic traffic.',
    alternates: {
        canonical: 'https://espercreations.com/blogs/what-seo-actually-does',
    },
    openGraph: {
        title: 'What SEO Actually Does: What SEO Is & How It Works',
        description:
        'Learn what SEO actually does, what SEO is, and how SEO works to improve visibility, rankings, and long-term organic traffic.',
    },
};

const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
        '@type': 'Question',
        name: 'What is SEO and how does it work?',
        acceptedAnswer: {
            '@type': 'Answer',
            text: 'SEO works by optimizing a website’s content, technical structure, and authority so search engines can rank it for relevant searches.',
        },
        },
        {
        '@type': 'Question',
        name: 'What does SEO do for a website?',
        acceptedAnswer: {
            '@type': 'Answer',
            text: 'SEO increases visibility, drives organic traffic, builds trust, and improves long-term online performance.',
        },
        },
        {
        '@type': 'Question',
        name: 'Is SEO free?',
        acceptedAnswer: {
            '@type': 'Answer',
            text: 'SEO does not require paying for ads, but it does require time, expertise, and ongoing optimization.',
        },
        },
        {
        '@type': 'Question',
        name: 'How long does SEO take to work?',
        acceptedAnswer: {
            '@type': 'Answer',
            text: 'SEO typically takes weeks or months depending on competition, site quality, and consistency.',
        },
        },
    ],
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'What SEO Actually Does (And How SEO Works)',
  description:
    'Learn what SEO actually does, what SEO is, and how SEO works to improve visibility, rankings, and organic traffic.',
  image: 'https://espercreations.com/path-to-your-image.jpg',
  author: {
    '@type': 'Organization',
    name: 'Esper Creations',
    url: 'https://espercreations.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Esper Creations',
    logo: {
      '@type': 'ImageObject',
      url: 'https://espercreations.com/logo.png',
    },
  },
  datePublished: '2025-12-03',
  dateModified: '2026-01-08',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://espercreations.com/blogs/what-seo-actually-does',
  },
};


export default function Page() {
    return (
        <>
            <Script
                id="article-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />
            <Script
                id="faq-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            <WhatSeoActuallyDoes />
        </>
    );
}
