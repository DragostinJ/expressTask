const fs = require("fs");
let store = {};

module.exports = {
  set: (key, value, ttl = null) => {
    if (typeof key === "string") {
      // if key and ttl provided  - create temploary key
      if (!store.hasOwnProperty(key) && (ttl !== null || ttl !== undefined)) {
        store[key] = value;
        setTimeout(() => {
          store[key] = null;
        }, ttl * 1000);
      } else if (
        store.hasOwnProperty(key) &&
        (ttl !== null || ttl !== undefined)
      ) {
        store[key] = value;
        setTimeout(() => {
          store[key] = null;
        }, ttl * 1000);
      }

      // if non preveous key and ttl not given create new key without ttl
      else if (!store.hasOwnProperty(key) && ttl === null) {
        store[key] = value;
      }
    } else {
      throw new Error("Key must be a string");
    }
  },
  //gets record from store by given parameter on route
  get: key => {
    if (typeof key === "string") {
      if (store.hasOwnProperty(key)) {
        return store[key];
      } else if (!store.hasOwnProperty(key)) {
        return null;
      }
    } else {
      throw new Error("Key must be a string");
    }
  },
  // function for deleting key
  del: key => {
    if (typeof key === "string") {
      if (store.hasOwnProperty(key)) {
        store[key] = undefined;
      } else if (!store.hasOwnProperty(key)) {
        return null;
      }
    } else {
      throw new Error("Key must be a string");
    }
  }
};
