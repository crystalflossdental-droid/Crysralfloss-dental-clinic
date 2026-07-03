export interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  image: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: 'Committed To Excellence',
    subtitle: 'Advanced dental care designed around comfort, precision, and naturally confident smiles for every patient.',
    buttonText: 'View Our Services',
    buttonLink: '#treatments',
    image: '/assets/images/1.jpg',
  },
  {
    id: 2,
    title: 'Beautiful Smiles Start Here',
    subtitle: 'From veneers to smile makeovers, we blend digital planning with gentle care for polished results.',
    buttonText: 'Explore Treatments',
    buttonLink: '#treatments',
    image: '/assets/images/2.jpg',
  },
  {
    id: 3,
    title: 'Trusted Care With Comfort',
    subtitle: 'Routine checkups, restorative care, and painless procedures delivered in a calm, welcoming clinic environment.',
    buttonText: 'Schedule Visit',
    buttonLink: '#contact',
    image: '/assets/images/3.jpg',
  },
   {
    id: 4,
    title: 'Athlete-Focused Dental Care',
    subtitle: 'Custom sports mouthguards, TMJ treatment, and performance-driven care to keep active patients smiling and playing at their best.',
    buttonText: 'Book Appointment',
    buttonLink: '#contact',
    image: '/assets/images/4.jpg',
  },
];
