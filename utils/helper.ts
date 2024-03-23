import { INavLinks } from '@/types';

export const navLinks: INavLinks[] = [
  { title: 'Home', path: '/' },
  { title: 'Blogs', path: '/' },
  { title: 'About Us', path: 'https://ideausher.com/about-us/' }
];

export const getFormattedDate = (date: string) => {
  return new Date(date).toDateString();
};
