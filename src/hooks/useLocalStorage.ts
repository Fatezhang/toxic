import { useEffect, useState } from 'react';

export const useLocalstorage = <T>(
  key: string,
  initialValue: T,
  resetLocalStorage = false
): [ T, (t: T | null) => void ] => {
  const [ storedValue, setStoredValue ] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return !item || resetLocalStorage ? initialValue : JSON.parse(item) as T;
    } catch (error) {
      return initialValue;
    }
  });

  const updateStoredValue = (value: T | null) => {
    if (value !== null && value !== undefined) {
      setStoredValue(value);
    } else {
      window.localStorage.removeItem(key);
    }
  };

  // local storage is automatically set when state is updated.
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(storedValue));
  }, [ key, storedValue ]);

  return [ storedValue, updateStoredValue ];
};
