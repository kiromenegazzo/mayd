import { formatBySeparator } from 'features/core';
import { Image } from 'features/ui/components/Image';

import * as UI from './styles';
import { IProps } from './types';

export const Card = (props: IProps) => {
  const { name, population, region, capital, flag, ...rest } = props;

  const renderItem = (label: string, value: string | number) => (
    <UI.Item>
      <UI.Label>
        {label}
        :
      </UI.Label>
      <UI.Value>
        {value}
      </UI.Value>
    </UI.Item>
  );

  return (
    <UI.Card {...rest}>
      <Image alt={`${name} flag`} src={flag}/>
      <UI.Content>
        <UI.Title>{name}</UI.Title>
        {renderItem('Population', formatBySeparator(population))}
        {renderItem('Region', region)}
        {renderItem('Capital', capital)}
      </UI.Content>
    </UI.Card>
  );
};
