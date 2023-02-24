export default function useLocalStorage(key, value) {
  function getItem(key) {
    initiaVal = item ? JSON.parse(item) : baslangicDegeri;
    localstroge.setItem(key, JSON.stringify(initiaVal));
    return initiaVal;
  }

  const setValueClickHandler = (value) => {
    setStoredValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };
  return [storedValue, setValueClickHandler];
}
