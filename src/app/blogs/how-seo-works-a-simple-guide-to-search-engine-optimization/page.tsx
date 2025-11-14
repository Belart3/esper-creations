// app/mypage/page.tsx
import HowSeoWorks from '@/components/HowSeoWorks';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'How Search Engine Optimization Works | Esper Creations',
    description: "Learn how SEO improves your site's visibility through content, backlinks, and technical optimization.",
    alternates: {
        canonical: 'https://espercreations.com/blogs/how-seo-works-a-simple-guide-to-search-engine-optimization',
    },
    openGraph: {
        title: 'How Search Engine Optimization Works | Esper Creations',
        description: "Learn how SEO improves your site's visibility through content, backlinks, and technical optimization.",
    },
};

export default function Page() {
    return <HowSeoWorks />;
}
