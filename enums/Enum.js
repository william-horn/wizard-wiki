
// !issue learn more about object prototypes for inheritance

const EnumItemName = 'EnumItem';

const EnumCollectionPrototype = {
  findByMatch: function(key, value) {
    for (let enumKey in this) {
      const enumItem = this[enumKey];
      if (enumItem._customType === EnumItemName && enumItem[key] === value) {
        return enumItem;
      }
    }
  }
}

export const enumify = function(data) {
  data._customType = EnumItemName;
  return data;
}


export const EnumCollection = function(data) {
  Object.assign(this, data);
}

Object.assign(EnumCollection.prototype, EnumCollectionPrototype);