export const saveToLocalStorage = (key: string, data: any) => {
  const stringifyData = JSON.stringify(data);
  localStorage.setItem(key, stringifyData);
};

export const loadFromLocalStorage = (key: string) => {
  const stringifyData = localStorage.getItem(key);
  if (stringifyData) {
    return JSON.parse(stringifyData);
  }
  throw new Error("Can't get data from localstorage");
};
