
import EnumItem from './EnumItem';

/*
  'value' - standard enum value
  'title' - browser tab name
  'name' - rendered text name of page
  'url' - url location of page
*/

const Pages = {
    Home: {
      value: 'home',
      title: 'Raven Home',
      name: 'Home',
      url: '/',
    },

    About: {
      value: 'about',
      title: 'About',
      name: 'About',
      url: '/about',
    },

    Donate: {
      value: 'donate',
      title: 'Donate',
      name: 'Donate',
      url: '/donate',
    },

    Explore: {
      value: 'explore',
      title: 'Explore',
      name: 'Explore',
      url: '/explore',
    }
}

export default Pages;