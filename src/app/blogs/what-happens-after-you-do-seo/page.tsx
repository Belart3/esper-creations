
import WhatHappensAfterSeo from '@/components/WhatHappensAfterSeo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'What Happens After You Do SEO',
    description: 'Learn what happens after you do SEO, how long it takes to work, and when rankings and traffic start improving.',
    alternates: {
        canonical: 'https://espercreations.com/blogs/what-happens-after-you-do-seo',
    },
    openGraph: {
        title: 'What Happens After You Do SEO? Timeline, Results & What to Expect',
        description: 'Learn what happens after you do SEO, how long it takes to work, and when rankings and traffic start improving.',
    },
};

export default function Page() {
    return <WhatHappensAfterSeo />;
}
