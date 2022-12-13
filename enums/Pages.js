
import { enumify, EnumCollection } from './Enum';

/*
  'value' - standard enum value
  'title' - browser tab name
  'name' - rendered text name of page
  'url' - url location of page
*/

/*
Make a "layout switcher" component in the future that will use different layouts depending on the 
current page. Also make components of those layouts selectable.

Ex:

1)
<LayoutSwitcher>
  <App>
</LayoutSwitcher>

2)
import Layouts from '...';

const LayoutSwitcher = () => {


}

*/

const pageItemPrototypes = {
  excludes: function(componentName) {
    if (!this.layout.excludes) {
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
    title: 'About',
    name: 'About',
    url: '/about',
    layout: { name: 'HeaderFooterLayout', excludes: { header: true }}
  }),

  Explore: new PageItem({
    value: 'explore',
    title: 'Explore',
    name: 'Explore',
    url: '/explore',
    layout: {
      name: 'HeaderFooterLayout',
      excludes: {
        header: true
      }
    }
  }),

  Donate: new PageItem({
    value: 'donate',
    title: 'Donate',
    name: 'Donate',
    url: '/donate',
    layout: 'HeaderFooterLayout'
  }),

  _404: new PageItem({
    value: 'page_not_found',
    title: 'Not Found',
    layout: 'HeaderFooterLayout'
  })
});

export default Pages;