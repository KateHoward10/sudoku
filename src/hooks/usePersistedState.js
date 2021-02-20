import { useState, useEffect } from 'react';

export default function usePersistedState(key, defaultValue,) {
  const [value, setValue] = useState(() => {
    const persisted = localStorage.getItem(key);
    return JSON.parse(persisted) || defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
