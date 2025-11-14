// app/mypage/page.tsx
import HowMuchWebDesignCosts from '@/components/HowMuchWebDesignCosts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'How Much Does Website Design Cost? | Esper Creations',
    description: 'Understand what affects website design pricing and how to plan your web development budget.',
    alternates: {
        canonical: 'https://espercreations.com/blogs/how-much-does-website-design-cost',
    },
    openGraph: {
        title: 'How Website Design Affects UX | Esper Creations',
        description: 'Learn how smart website design improves user experience, boosts engagement, and drives conversions for Iowa City businesses.',
    },
};

export default function Page() {
    return <HowMuchWebDesignCosts />;
}
