import { KeyboardEvent, MutableRefObject, Suspense, useEffect, useRef } from 'react';

import { useLocation, useNavigate, createSearchParams } from 'react-router-dom';

import queryString from 'query-string';

import { Spinner, ISelectChangeEvent } from 'features/ui';

import { Content } from './Content';
import { regionOptions } from './constants';
import * as UI from './styles';

export const List = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = queryString.parse(location.search, { arrayFormat: 'comma', parseNumbers: true });
  const { region, search, page } = queryParams;
  const regionValue = typeof region === 'string' ? region : '' ;
  const searchValue = typeof search === 'string' ? search : '';
  const pageValue = typeof page === 'number' ? page : 1;

  const handleSearch = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Enter') {
      navigate({
        search: createSearchParams({
          search: (event.target as HTMLInputElement).value,
        }).toString(),
      });
    }
  };

  const handleFilter = (event: ISelectChangeEvent) => {
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
          defaultValue={searchValue}
          key={regionValue}
          onKeyDown={handleSearch}
        />
        <UI.Filter
          options={regionOptions}
          value={regionValue}
          onChange={handleFilter}
        />
      </UI.Controls>
      <Suspense fallback={<Spinner/>}>
        <Content
          page={pageValue}
          region={regionValue}
          search={searchValue}
          onCardClick={navigate}
          onPageChange={handlePageChange}
        />
      </Suspense>
    </>
  );
};
