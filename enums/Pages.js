
import { enumify, EnumCollection } from './Enum';

/*
  'value' - standard enum value
  'title' - browser tab name
  'name' - rendered text name of page
  'url' - url location of page
*/

const pageItemPrototypes = {
  excludes: function(componentName, override) {
    if (!this.layout.excludes || override) {
      return false;
    }

    return this.layout.excludes[componentName] === true;
  }
}

const PageItem = function(data) {
  Object.assign(this, enumify(data));
}

Object.assign(PageItem.prototype, pageItemPrototypes);

const Pages = new EnumCollection({
  Home: new PageItem({
    value: 'home',
    title: 'Raven Home',
    name: 'Home',
    url: '/',
    layout: 'HeaderFooterLayout',
  }),

  About: new PageItem({
    value: 'about',
    title: 'Raven About',
    name: 'About',
    url: '/about',
    layout: { 
      name: 'HeaderFooterLayout', 
      excludes: { 
        // header: true 
      }
    }
  }),

  Explore: new PageItem({
    value: 'explore',
    title: 'Raven Explore',
    name: 'Explore',
    url: '/explore',
    layout: {
      name: 'HeaderFooterLayout',
      excludes: {
        header: true,
      }
    }
  }),

  Donate: new PageItem({
    value: 'donate',
    title: 'Raven Donate',
    name: 'Donate',
    url: '/donate',
    layout: 'HeaderFooterLayout',
  }),

  _404: new PageItem({
    value: 'page_not_found',
    title: 'Not Found',
    layout: 'HeaderFooterLayout'
  })
});

export default Pages;