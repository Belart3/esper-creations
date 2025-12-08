import BeginnersGuideToSeo from '@/components/BeginnersGuideToSeo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Beginner’s Guide to SEO: Your Quick Start SEO Blueprint',
    description: 'A beginner’s guide to SEO that gives you a simple, quick start SEO blueprint. Learn keywords, indexing, content optimization, and link building basics.',
    alternates: {
        canonical: 'https://espercreations.com/blogs/beginners-guide-to-seo',
    },
    openGraph: {
        title: 'Beginner’s Guide to SEO: Your Quick Start SEO Blueprint',
        description: 'A beginner’s guide to SEO that gives you a simple, quick start SEO blueprint. Learn keywords, indexing, content optimization, and link building basics.',
    },
};

export default function Page() {
    return <BeginnersGuideToSeo />;
}
