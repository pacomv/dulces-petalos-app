import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delayInMs: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delayInMs);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delayInMs]);

  return debouncedValue;
}
