import { useCallback } from "react";

export type StorageChangeCallback<T> = (newValue: T | undefined) => void;

function useLocalStorage<T>(key: string) {
  const get = useCallback((): T | undefined => {
    if (!key) return;
    try {
      const persistedValue = localStorage.getItem(key);
      if (!persistedValue) return;
      return JSON.parse(persistedValue);
    } catch (e) {
      console.error("Failed to retrieve stored value");
      return;
    }
  }, [key]);

  const set = useCallback(
    (value: T) => {
      if (!key) return;
      try {
        const stringifyValue = JSON.stringify(value);
        localStorage.setItem(key, stringifyValue);
      } catch (e) {
        console.error("Failed to set value in LocalStorage", e);
        return;
      }
    },
    [key]
  );

  return { get, set };
}

export default useLocalStorage;
