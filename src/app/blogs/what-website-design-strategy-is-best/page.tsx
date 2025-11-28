import WhatWebsiteDesignStrategyIsBest from '@/components/WhatWebsiteDesignStrategyIsBest';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'What Website Design Strategy Is Best? | Beautiful and Smart Web Design by Esper Creations',
    description: 'Discover the best website design strategy for modern businesses — a blend of clean, beautiful design, smart UX, mobile-first layouts, fast performance, and clear storytelling. Learn how Esper Creations creates professional websites that look great and work flawlessly.',
    alternates: {
        canonical: 'https://espercreations.com/blogs/what-website-design-strategy-is-best',
    },
    openGraph: {
        title: 'What Website Design Strategy Is Best? | Beautiful and Smart Web Design by Esper Creations',
        description: 'Discover the best website design strategy for modern businesses — a blend of clean, beautiful design, smart UX, mobile-first layouts, fast performance, and clear storytelling. Learn how Esper Creations creates professional websites that look great and work flawlessly.',
    },
};

export default function Page() {
    return <WhatWebsiteDesignStrategyIsBest />;
}
