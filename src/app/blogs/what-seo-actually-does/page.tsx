import WhatSeoActuallyDoes from '@/components/WhatSeoActuallyDoes';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'What SEO Actually Does: How SEO Works & Why It Matters',
    description: 'Learn what SEO actually does, how search engines work, and why SEO boosts visibility, rankings, and long-term organic traffic.',
    alternates: {
        canonical: 'https://espercreations.com/blogs/what-seo-actually-does',
    },
    openGraph: {
        title: 'What SEO Actually Does: How SEO Works & Why It Matters',
        description: 'Learn what SEO actually does, how search engines work, and why SEO boosts visibility, rankings, and long-term organic traffic.',
    },
};

export default function Page() {
    return <WhatSeoActuallyDoes />;
}
