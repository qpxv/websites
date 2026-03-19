export type Hero = {
  slug: string;
  title: string;
  category: string;
  description: string;
  previewColors: {
    from: string;
    via: string;
    to: string;
  };
  accentLabel: string;
  tintColor: string;
};

export const heroes: Hero[] = [
  {
    slug: 'business-coach',
    title: 'Business Coach',
    category: 'Business Coaching',
    description:
      'Dark, premium design with gold accents. Built for high-ticket business and executive coaches who need to communicate authority.',
    previewColors: {
      from: '#0a0a0a',
      via: '#1c1500',
      to: '#2d2000',
    },
    accentLabel: 'Gold / Dark',
    tintColor: '#f59e0b',
  },
  {
    slug: 'fitness-coach',
    title: 'Fitness Coach',
    category: 'Physical Coaching',
    description:
      'Bold, high-energy design with red-orange gradient accents. Built for personal trainers and fitness coaches ready to inspire action.',
    previewColors: {
      from: '#0a0a0a',
      via: '#1f0400',
      to: '#2d0800',
    },
    accentLabel: 'Red / Dark',
    tintColor: '#ef4444',
  },
  {
    slug: 'mindset-coach',
    title: 'Mindset Coach',
    category: 'Mindset Coaching',
    description:
      'Clean, airy design with soft purple accents. Ideal for mindset and transformation coaches with a modern, uplifting aesthetic.',
    previewColors: {
      from: '#f5f3ff',
      via: '#ede9fe',
      to: '#c4b5fd',
    },
    accentLabel: 'Purple / Light',
    tintColor: '#8b5cf6',
  },
  {
    slug: 'life-coach',
    title: 'Life Coach',
    category: 'Life Coaching',
    description:
      'Warm, deep design with teal accents. Perfect for life coaches and wellness coaches who lead with genuine human connection.',
    previewColors: {
      from: '#0a0f0e',
      via: '#0d1f1c',
      to: '#0b2420',
    },
    accentLabel: 'Teal / Dark',
    tintColor: '#14b8a6',
  },
];
