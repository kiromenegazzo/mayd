import { KeyboardEvent, MutableRefObject, Suspense, useEffect, useRef } from 'react';

import { useLocation, useNavigate, createSearchParams } from 'react-router-dom';

import queryString from 'query-string';

import { TService } from 'features/country/api';
import { useListQuery } from 'features/country/hooks/useQuery';
import { Pagination, Spinner } from 'features/ui';
import { IEvent } from 'features/ui/components/Select';

import { regionOptions } from './constants';
import * as UI from './styles';

const LIMIT = 16;

const List = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = queryString.parse(location.search, { arrayFormat: 'comma', parseNumbers: true });
  const { region, search, page } = queryParams;
  const currentPage = typeof page === 'number' ? page : 1;

  const getQueryParams = () => {
    if (region && typeof region === 'string') {
      return {
        service: 'region' as TService,
        path: region.toLowerCase(),
      };
    }

    if (search && typeof search === 'string') {
      return {
        service: 'name' as TService,
        path: search,
        fullText: true,
      };
    }
  };

  const { data = [] } = useListQuery({
    fields: ['region', 'flags', 'name', 'population', 'capital'],
    ...getQueryParams(),
  });

  const handleSearch = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Enter') {
      navigate({
        search: createSearchParams({
          search: (event.target as HTMLInputElement).value,
        }).toString(),
      });
    }
  };

  const handleFilter = (event: IEvent) => {
    navigate({
      search: createSearchParams({
        region: event.target.value as string,
      }).toString(),
    });
  };

  const handlePageChange = (value: number) => {
    navigate({
      search: createSearchParams({
        ...queryParams,
        page: String(value),
      }).toString(),
    });
  };

  const ref = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView();
    }
  }, [page]);

  return (
    <>
      <UI.Controls ref={ref}>
        <UI.Search
          defaultValue={typeof search === 'string' ? search : ''}
          onKeyDown={handleSearch}
        />
        <UI.Filter
          options={regionOptions}
          value={typeof region === 'string' ? region : ''}
          onChange={handleFilter}
        />
      </UI.Controls>
      <UI.Content>
        {data.slice((currentPage - 1) * LIMIT, currentPage * LIMIT).map((item) => (
          <UI.Item
            capital={item.capital[0]}
            flag={item.flags.png}
            key={item.name.official}
            name={item.name.official}
            population={item.population}
            region={item.region}
            onClick={() => navigate(`/${item.name.common}`)}
          />
        ))}
      </UI.Content>
      <UI.Footer>
        <Pagination
          limit={LIMIT}
          page={currentPage}
          total={data.length}
          onChange={handlePageChange}
        />
      </UI.Footer>
    </>
  );
};

export default () => (
  <Suspense fallback={<Spinner/>}>
    <List/>
  </Suspense>
);
