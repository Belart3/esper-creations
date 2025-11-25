import WhatIsWebsiteDesignAndDevelopment from '@/components/WhatIsWebsiteDesignAndDevelopment';
import WhyWebsiteDesignIsImportant from '@/components/WhyWebsiteDesignIsImportant';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Why Website Design Is Important | Small Business Web Design',
    description: 'Discover why website design is essential for small businesses. Learn how strategic, SEO-friendly, mobile-first design increases trust, traffic & conversions.',
    alternates: {
        canonical: 'https://espercreations.com/blogs/why-website-design-is-important',
    },
    openGraph: {
        title: 'Why Website Design Is Important | Small Business Web Design',
        description: 'Discover why website design is essential for small businesses. Learn how strategic, SEO-friendly, mobile-first design increases trust, traffic & conversions.',
    },
};

export default function Page() {
    return <WhyWebsiteDesignIsImportant />;
}
