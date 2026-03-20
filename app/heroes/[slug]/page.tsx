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

      <HeroComponent />
    </div>
  );
}
