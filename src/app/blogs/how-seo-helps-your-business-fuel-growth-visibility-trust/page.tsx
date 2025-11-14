// app/mypage/page.tsx
import HowSeoHelpsYourBusiness from '@/components/HowSeoHelpsYourBusiness';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'How SEO Helps Your Business | Esper Creations',
    description: "Learn how SEO boosts your traffic, builds brand trust, and drives long-term revenue — without relying on ads.",
    alternates: {
        canonical: 'https://espercreations.com/blogs/how-seo-helps-your-business-fuel-growth-visibility-trust',
    },
    openGraph: {
        title: 'How SEO Helps Your Business | Esper Creations',
        description: "Learn how SEO boosts your traffic, builds brand trust, and drives long-term revenue — without relying on ads.",
    },
};

export default function Page() {
  return <HowSeoHelpsYourBusiness />;
}
