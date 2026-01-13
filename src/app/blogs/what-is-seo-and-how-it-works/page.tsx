// app/mypage/page.tsx
import HowSeoWorks from '@/components/HowSeoWorks';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'What Is SEO and How It Works: Simple Guide for Beginners',
    description: "Learn what SEO is and how it works, from crawling and indexing to keywords, backlinks, and technical SEO that drive rankings and organic traffic.",
    alternates: {
        canonical: 'https://espercreations.com/blogs/what-is-seo-and-how-it-works',
    },
    openGraph: {
        title: 'What Is SEO and How It Works: Simple Guide for Beginners',
        description: "Learn what SEO is and how it works, from crawling and indexing to keywords, backlinks, and technical SEO that drive rankings and organic traffic.",
    },
};

export default function Page() {
    return <HowSeoWorks />;
}
