import { useState, useEffect, useRef } from 'react';

export function useComponentVisible<T = HTMLDivElement>(
  initialVisible: boolean,
  outsideCallback?: () => void,
  capture: boolean = true,
) {
  const [isVisible, setIsVisible] = useState(initialVisible);
  const ref = useRef<T>(null);

  const handleClickOutside = (event: MouseEvent): void => {
    // @ts-ignore
    if (ref.current && !ref.current.contains(event.target)) {
      if (isVisible) {
        event.preventDefault();
      }

      if (outsideCallback) {
        outsideCallback();
      }

      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, capture);

    return () => {
      document.removeEventListener('click', handleClickOutside, capture);
    };
  });

  return { ref, isVisible, setIsVisible };
}
