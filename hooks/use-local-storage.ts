'use client';
import { useEffect, useState } from 'react';

function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);

  useEffect(() => {
    const value = localStorage.getItem(key);
    setValue(value ? (JSON.parse(value) as T) : initialValue);
  }, [key, initialValue]);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}

export default useLocalStorage;
