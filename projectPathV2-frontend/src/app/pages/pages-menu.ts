import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'nb-home',
    link: '/pages/home',
  },
  {
    title: 'Latest',
    icon: 'fa fa-newspaper',
    link: '/pages/newest',
  },
  {
    title: 'Trending',
    icon: 'ion-md-trending-up icon-style',
    link: '/pages/trending',
  },
  {
    title: 'Top Rated',
    icon: 'nb-star',
    link: '/pages/top-rated'
  },
  {
    title: 'View Profile',
    link: '/pages/view-profile',
  }

];
