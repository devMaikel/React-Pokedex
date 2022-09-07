const getFromLocalStorage = (key) => {
  const stringifiedValue = localStorage.getItem(key);
  if (stringifiedValue === '' || stringifiedValue?.length === 0) return JSON.parse('[]');
  return JSON.parse(stringifiedValue);
};

export default getFromLocalStorage;
