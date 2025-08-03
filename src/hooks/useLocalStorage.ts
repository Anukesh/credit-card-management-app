import { useEffect, useState, type Dispatch, type SetStateAction } from "react";

export function useLocalStorage<T>(
  key: string,
  initialValue: T | (() => T)
): [T, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => {
    const localValue = localStorage.getItem(key);
    if (localValue !== null) {
      try {
        return JSON.parse(localValue) as T;
      } catch (e) {
        console.warn(`Error parsing localStorage key "${key}":`, e);
      }
    }
    return typeof initialValue === "function"
      ? (initialValue as () => T)()
      : initialValue;
  });

  useEffect(() => {
    if (value !== undefined && value !== null) {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.removeItem(key);
    }
  }, [value, key]);

  return [value, setValue];
}
