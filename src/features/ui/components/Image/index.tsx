import { useState, SyntheticEvent } from 'react';

import { useInView } from 'react-intersection-observer';

import { Spinner } from '@features/ui/components/Spinner';
import { useNativeLazyLoading } from '@features/ui/hooks/useNativeLazyLoading';

import * as UI from './styles';
import { IProps } from './types';

export const Image = (props: IProps) => {
  const {
    src, alt = 'The image will be here very soon', aspectRatio = '16/9', objectFit = 'contain',
    onLoad, onError, className,
  } = props;

  const [error, setError] = useState<boolean>();
  const loading = src && error === undefined;

  const nativeLazySupport = useNativeLazyLoading();
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
    skip: nativeLazySupport,
  });

  const handleLoad = (event: SyntheticEvent<HTMLImageElement>) => {
    setError(false);

    if (onLoad) {
      onLoad(event);
    }
  };

  const handleError = (event: SyntheticEvent<HTMLImageElement>) => {
    setError(true);

    if (onError) {
      onError(event);
    }
  };

  if (!src || error) {
    return (
      <UI.Placeholder>
        {alt}
      </UI.Placeholder>
    );
  }

  return (
    <UI.Container $aspectRatio={aspectRatio} className={className} ref={ref}>
      {(inView || nativeLazySupport) && (
        <>
          <UI.Image
            $objectFit={objectFit}
            alt={alt}
            src={src}
            onError={handleError}
            onLoad={handleLoad}
          />
          {loading && <Spinner isAbsolute/>}
        </>
      )}
    </UI.Container>
  );
};
