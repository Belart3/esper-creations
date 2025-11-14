// app/mypage/page.tsx
import HowWebsiteDesignAffectsUX from '@/components/HowWebsiteDesignAffectsUX';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Website Design Affects UX | Esper Creations',
  description: 'Learn how smart website design improves user experience, boosts engagement, and drives conversions for Iowa City businesses.',
  alternates: {
    canonical: 'https://espercreations.com/blogs/how-website-design-affects-user-experience/',
  },
  openGraph: {
    title: 'How Website Design Affects UX | Esper Creations',
    description: 'Learn how smart website design improves user experience, boosts engagement, and drives conversions for Iowa City businesses.',
  },
};

export default function Page() {
    return <HowWebsiteDesignAffectsUX />;
}
