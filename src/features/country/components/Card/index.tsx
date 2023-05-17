import * as UI from './styles';
import { IProps } from './types';

export const Card = (props: IProps) => {
  const { name, population, region, capital } = props;

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
    <UI.Card>
      <UI.Image />
      <UI.Content>
        <UI.Title>{name}</UI.Title>
        {renderItem('Population', population)}
        {renderItem('Region', region)}
        {renderItem('Capital', capital)}
      </UI.Content>
    </UI.Card>
  );
};
