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
    icon: 'fas fa-user',
    link: '/pages/view-profile',
  },
  {
    title: 'Search Result',
    icon: 'fa fa-search-location',
    link: '/pages/search-result',
  }

];
