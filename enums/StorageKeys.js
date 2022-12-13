
import { enumify, EnumCollection } from './Enum';
const keyPrefix = 'wiz-wiki:';

const StorageKeys = new EnumCollection({
  Theme: enumify({
    value: 'current-theme',
    info: 'The currently selected theme name'
  }),
})

for (const item in StorageKeys) {
  StorageKeys[item].value = keyPrefix + StorageKeys[item].value;
}

export default StorageKeys;