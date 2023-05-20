import { formatBySeparator } from '@core/utils/number';

import { Image, LabelValue } from '@features/ui';

import * as UI from './styles';
import { IProps } from './types';

export const Card = (props: IProps) => {
  const { name, population, region, capital, flag, ...rest } = props;

  return (
    <UI.Card {...rest}>
      {/* all flags are shown in the same way but some of them are distorted */}
      <Image alt={`${name} flag`} objectFit="cover" src={flag}/>
      <UI.Content>
        <UI.Title>{name}</UI.Title>
        <LabelValue label='Population' value={formatBySeparator(population)}/>
        <LabelValue label='Region' value={region}/>
        <LabelValue label='Capital' value={capital}/>
      </UI.Content>
    </UI.Card>
  );
};
