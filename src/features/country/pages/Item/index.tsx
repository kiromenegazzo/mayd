import { Suspense } from 'react';

import { useParams } from 'react-router-dom';

import { useItemQuery } from 'features/country/hooks/useQuery';
import { Spinner } from 'features/ui';

export const Item = () => {
  const { id } = useParams();

  const { data } = useItemQuery({
    name: id as string,
    fields: ['region', 'flags', 'name', 'population', 'capital', 'subregion', 'tld', 'currencies', 'languages', 'borders'],
  });

  return (
    <>
      I'm item
    </>
  );
};

export default () => (
  <Suspense fallback={<Spinner/>}>
    <Item/>
  </Suspense>
);
