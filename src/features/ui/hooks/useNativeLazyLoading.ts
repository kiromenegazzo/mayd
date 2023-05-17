import { useEffect, useState } from 'react';

let isSupported: boolean;

export const useNativeLazyLoading = () => {
  const [supported, setSupported] = useState<boolean>(isSupported);

  useEffect(() => {
    if (isSupported === undefined) {
      isSupported = 'loading' in HTMLImageElement.prototype;

      setSupported(isSupported);
    }
  }, []);

  return supported;
};
