import ThreePillarsOfSeo from '@/components/ThreePillarsOfSeo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'What Are the Three Pillars of SEO? Technical, On-Page & Off-Page Explained',
    description: 'Understand the three pillars of SEO and how technical, on-page, and off-page SEO improve rankings, traffic, and search visibility.',
    alternates: {
        canonical: 'https://espercreations.com/blogs/what-are-the-three-pillars-of-seo',
    },
    openGraph: {
        title: 'What Are the Three Pillars of SEO? Technical, On-Page & Off-Page Explained',
        description: 'Understand the three pillars of SEO and how technical, on-page, and off-page SEO improve rankings, traffic, and search visibility.',
    },
};

export default function Page() {
    return <ThreePillarsOfSeo />;
}
