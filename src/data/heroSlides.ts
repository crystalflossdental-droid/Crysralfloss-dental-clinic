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
    image: '/assets/images/dental-image-1.jpg',
  },
  {
    id: 2,
    title: 'Beautiful Smiles Start Here',
    subtitle: 'From veneers to smile makeovers, we blend digital planning with gentle care for polished results.',
    buttonText: 'Explore Treatments',
    buttonLink: '#treatments',
    image: '/assets/images/dental-image-2.jpg',
  },
  {
    id: 3,
    title: 'Trusted Care With Comfort',
    subtitle: 'Routine checkups, restorative care, and painless procedures delivered in a calm, welcoming clinic environment.',
    buttonText: 'Schedule Visit',
    buttonLink: '#contact',
    image: '/assets/images/dental-image-3.jpg',
  },
   
];
