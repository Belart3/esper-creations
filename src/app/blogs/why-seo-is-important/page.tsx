import WhySeoIsImportant from '@/components/WhySeoIsImportant';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Why SEO Is Important: Key Benefits for Your Business',
    description: 'Learn why SEO is important and how it helps your business increase visibility, authority, organic traffic, user experience, and long-term conversions.',
    alternates: {
        canonical: 'https://espercreations.com/blogs/why-seo-is-important',
    },
    openGraph: {
        title: 'Why SEO Is Important: Key Benefits for Your Business',
        description: 'Learn why SEO is important and how it helps your business increase visibility, authority, organic traffic, user experience, and long-term conversions.',
    },
};

export default function Page() {
    return <WhySeoIsImportant />;
}
