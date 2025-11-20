// app/mypage/page.tsx
import HowMuchWebDesignCosts from '@/components/HowMuchWebDesignCosts';
import WhatIsWebsiteDesignAndDevelopment from '@/components/WhatIsWebsiteDesignAndDevelopment';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Website Design and Development | Esper Creations',
    description: 'Website design and development explained with strategy, UX, SEO, and conversion-focused insights for modern businesses.',
    alternates: {
        canonical: 'https://espercreations.com/blogs/what-is-website-design-and-development',
    },
    openGraph: {
        title: 'Website Design & Development Guide | Esper Creations',
        description: 'Discover how strategic website design and development improve UX, boost conversions, and elevate your brand presence online.',
    },
};


export default function Page() {
    return <WhatIsWebsiteDesignAndDevelopment />;
}
