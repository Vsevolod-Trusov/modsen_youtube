import { useEffect, useRef } from 'react';

interface IDebounce {
  func: (...args: any) => void;
  delay: number;
  cleanUp?: boolean;
}

export function useDebouncedFunction({
  func,
  delay,
  cleanUp = false,
}: IDebounce) {
  const timeoutRef = useRef<NodeJS.Timeout>();

  function clearTimer() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = undefined;
    }
  }

  useEffect(() => (cleanUp ? clearTimer : undefined), [cleanUp]);

  return (...args: any) => {
    clearTimer();
    timeoutRef.current = setTimeout(() => func(...args), delay);
  };
}
