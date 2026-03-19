import { notFound } from 'next/navigation';
import Link from 'next/link';
import { heroes } from '@/lib/heroes';
import BusinessCoachHero from '@/components/heroes/BusinessCoachHero';
import FitnessCoachHero from '@/components/heroes/FitnessCoachHero';
import MindsetCoachHero from '@/components/heroes/MindsetCoachHero';
import LifeCoachHero from '@/components/heroes/LifeCoachHero';

const heroComponents: Record<string, React.ComponentType> = {
  'business-coach': BusinessCoachHero,
  'fitness-coach': FitnessCoachHero,
  'mindset-coach': MindsetCoachHero,
  'life-coach': LifeCoachHero,
};

export function generateStaticParams() {
  return heroes.map((hero) => ({ slug: hero.slug }));
}

export default async function HeroPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const hero = heroes.find((h) => h.slug === slug);

  if (!hero) notFound();

  const HeroComponent = heroComponents[slug];

  return (
    <div className="relative">
      {/* Floating back button */}
      <div className="fixed top-5 left-5 z-50">
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white/60 text-sm hover:text-white hover:bg-black/70 hover:border-white/20 transition-all duration-200"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Dashboard
        </Link>
      </div>

      <HeroComponent />
    </div>
  );
}
