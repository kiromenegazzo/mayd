export function useLocalStorage<T extends string>(key: string) {
  return {
    value: localStorage.getItem(key),
    onSet: (value: T) => localStorage.setItem(key, value),
    onRemove: () => localStorage.removeItem(key),
    onClear: () => localStorage.clear(),
  };
}
