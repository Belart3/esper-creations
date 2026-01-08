import WordPressOrCustomWebsiteDevelopment from '@/components/WordPressOrCustomWebsiteDevelopment';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'WordPress or Custom Website Development: Pros, Cons & Differences',
    description: 'WordPress or custom website development—which is right for you? Compare pros, cons, costs, scalability, performance, and SEO to choose the best option.',
    alternates: {
        canonical: 'https://espercreations.com/blogs/wordpress-or-custom-website-development',
    },
    openGraph: {
        title: 'WordPress or Custom Website Development: Pros, Cons & Differences',
        description: 'WordPress or custom website development—which is right for you? Compare pros, cons, costs, scalability, performance, and SEO to choose the best option.',
    },
};

export default function Page() {
    return <WordPressOrCustomWebsiteDevelopment />;
}
