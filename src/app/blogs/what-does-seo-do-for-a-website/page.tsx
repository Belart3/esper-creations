import WhatSeoDoesForaWebsite from '@/components/WhatSeoDoesForaWebsite';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'What Does SEO Do for a Website',
    description: "Learn what SEO does for a website, how search engine optimization improves visibility, traffic, trust, and long-term growth without relying on paid ads.",
    alternates: {
        canonical: 'https://espercreations.com/blogs/what-does-seo-do-for-a-website',
    },
    openGraph: {
        title: 'What Does SEO Do for a Website? A Complete Guide to Visibility & Growth',
        description: "Learn what SEO does for a website, how search engine optimization improves visibility, traffic, trust, and long-term growth without relying on paid ads.",
    },
};

export default function Page() {
    return <WhatSeoDoesForaWebsite />;
}
