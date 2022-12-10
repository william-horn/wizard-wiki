
import EnumItem from './EnumItem';
const keyPrefix = 'wiz-wiki:';

const StorageKeys = {
    Theme: new EnumItem('current-theme', 'The currently selected theme name')
}

for (const item in StorageKeys) {
  StorageKeys[item].value = keyPrefix + StorageKeys[item].value;
}

export default StorageKeys;