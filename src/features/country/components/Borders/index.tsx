import { useListQuery } from 'features/country/hooks/useQuery';
import { Button, Typography } from 'features/ui';

import * as UI from './styles';
import { IProps } from './types';

export const Borders = (props: IProps) => {
  const { codes, onClick } = props;

  const { data = [] } = useListQuery({
    service: 'alpha',
    codes,
    fields: ['name'],
  });

  return (
    <>
      <UI.Container
        label="Border Countries"
        value={data.length ? (
          <UI.Content>
            {data.map((item) => (
              <Button key={item.name.common} onClick={() => onClick(`/${item.name.common}`)}>
                {item.name.common}
              </Button>
            ))}
          </UI.Content>
        ) : <Typography type="p2" weight="light">—</Typography>}
      />
    </>
  );
};
