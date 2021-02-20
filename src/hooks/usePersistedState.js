import { useState, useEffect } from 'react';

function usePersistedValue(key, defaultValue) {
  const [value, setValue] = useState(() => {
    const persisted = localStorage.getItem(key);
    return JSON.parse(persisted) || defaultValue;
  });

  return [value, setValue];
}

export function usePersistedState(key, defaultValue) {
  const [value, setValue] = usePersistedValue(key, defaultValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export function useSavedState(key, defaultValue) {
  const [value, setValue] = usePersistedValue(key, defaultValue);
  const saveValue = () => localStorage.setItem(key, JSON.stringify(value));

  return [value, setValue, saveValue];
}
