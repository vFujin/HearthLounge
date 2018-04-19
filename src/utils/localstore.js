export const setLocalstorage = (storageName, storedObj) => {
  localStorage.setItem(storageName, JSON.stringify(storedObj));
};

export const removeLocalstorage = (storageName) => {
  localStorage.removeItem(storageName)
};