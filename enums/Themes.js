
import { enumify, EnumCollection } from './Enum';
const keyPrefix = 'theme-';

const Themes = new EnumCollection({
    Default: enumify({
      value: 'default',
      info: 'The default theme name',
    }),

    Test: enumify({
      value: 'test',
      info: 'A test theme'
    })
})

for (const item in Themes) {
  Themes[item].value = keyPrefix + Themes[item].value;
}

export default Themes;