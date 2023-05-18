import { TService } from 'features/country/api';
import { useListQuery } from 'features/country/hooks/useQuery';
import { NoData, Pagination } from 'features/ui';

import * as UI from './styles';
import { IContentProps } from './types';

const LIMIT = 16;

export const Content = (props: IContentProps) => {
  const { region, search, page, onCardClick, onPageChange } = props;

  const getQueryParams = () => {
    if (region) {
      return {
        service: 'region' as TService,
        path: region.toLowerCase(),
      };
    }

    if (search) {
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

  if (!data?.length) return <NoData/>;

  return (
    <>
      <UI.Content>
        {data.slice((page - 1) * LIMIT, page * LIMIT).map((item) => (
          <UI.Item
            capital={item.capital[0]}
            flag={item.flags.png}
            key={item.name.official}
            name={item.name.official}
            population={item.population}
            region={item.region}
            onClick={() => onCardClick(`/${item.name.common}`)}
          />
        ))}
      </UI.Content>
      <UI.Footer>
        <Pagination
          limit={LIMIT}
          page={page}
          total={data.length}
          onChange={onPageChange}
        />
      </UI.Footer>
    </>
  );
};
