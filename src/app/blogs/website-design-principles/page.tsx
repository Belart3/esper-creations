// app/mypage/page.tsx
import WebsiteDesignPrinciples from '@/components/WebsiteDesignPrinciples';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Website Design Principles for Small Business Success | Esper Creations',
    description: 'Learn expert website design principles that boost conversions, improve UX, and drive results for small businesses, startups, and e-commerce stores.',
    alternates: {
        canonical: 'https://espercreations.com/blogs/website-design-principles/',
    },
    openGraph: {
        title: 'Website Design Principles for Small Business Success | Esper Creations',
        description: 'Learn expert website design principles that boost conversions, improve UX, and drive results for small businesses, startups, and e-commerce stores.',
    },
};

export default function Page() {
    return <WebsiteDesignPrinciples />;
}
