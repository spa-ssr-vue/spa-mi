export const storage = {
  setItem(storageName, key, val, moduleName) {
    if (moduleName) {
      const storage = this.getStorage(storageName);
      storage[moduleName][key] = val;
      this.setStorage(storageName, storage);
      // const storage = this.getItem(storageName, moduleName);
      // storage[key] = val;
      // this.setItem(storageName, moduleName, storage);
      return;
    } else {
      const obj = this.getStorage(storageName);
      obj[key] = val;
      this.setStorage(storageName, obj);
      return;
    }
  },
  getItem(storageName, key, moduleName) {
    if (moduleName) {
      const obj = this.getStorage(storageName)[moduleName];
      // const obj = this.getItem(storageName, moduleName);
      if (obj) {
        return obj[key];
      }
    }
    return this.getStorage(storageName)[key];
  },
  removeItem(storageName, key, moduleName) {
    const storage = this.getStorage(storageName);
    if (moduleName) {
      delete storage[moduleName][key];
    } else {
      delete storage[key];
    }
    this.setStorage(storageName, storage);
  },

  setStorage(key, val) {
    return window.localStorage.setItem(key, JSON.stringify(val || {}));
  },
  getStorage(key) {
    return JSON.parse(window.localStorage.getItem(key) || "{}");
  },
};
