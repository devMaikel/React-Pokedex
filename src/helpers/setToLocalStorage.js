const setToLocalStorage = (key, pokemon) => {
    const stringifiedValue = JSON.stringify(pokemon);
    localStorage.setItem(key, stringifiedValue);
};

export default setToLocalStorage;
