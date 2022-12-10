
import EnumItem from './EnumItem';
const keyPrefix = 'theme-';

const Themes = {
    Default: new EnumItem('default', 'the default theme'),
    Test: new EnumItem('test', 'testing theme')
}

for (const item in Themes) {
  Themes[item].value = keyPrefix + Themes[item].value;
}

export default Themes;