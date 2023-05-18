import { formatBySeparator } from 'features/core';
import { Image, LabelValue } from 'features/ui';

import * as UI from './styles';
import { IProps } from './types';

export const Card = (props: IProps) => {
  const { name, population, region, capital, flag, ...rest } = props;

  return (
    <UI.Card {...rest}>
      <Image alt={`${name} flag`} src={flag}/>
      <UI.Content>
        <UI.Title>{name}</UI.Title>
        <LabelValue label='Population' value={formatBySeparator(population)}/>
        <LabelValue label='Region' value={region}/>
        <LabelValue label='Capital' value={capital}/>
      </UI.Content>
    </UI.Card>
  );
};
