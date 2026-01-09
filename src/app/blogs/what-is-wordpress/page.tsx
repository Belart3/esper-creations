import WhatIsWordpress from '@/components/WhatIsWordpress';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'What Is WordPress? Complete Guide to How WordPress Works',
    description:
        'What is WordPress and how does it work? Learn what WordPress is used for, whether it’s free, and why it powers millions of websites worldwide.',
    alternates: {
        canonical: 'https://espercreations.com/blogs/what-is-wordpress',
    },
    openGraph: {
        title: 'What Is WordPress? Complete Guide to How WordPress Works',
        description:
        'What is WordPress and how does it work? Learn what WordPress is used for, whether it’s free, and why it powers millions of websites worldwide.',
    },
};



export default function Page() {
    return (
        <>
            <WhatIsWordpress />
        </>
    );
}
