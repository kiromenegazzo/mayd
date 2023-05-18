import * as UI from './styles';
import { IProps } from './types';

export const LabelValue = (props: IProps) => {
  const { label, value, size } = props;

  return (
    <UI.Item>
      <UI.Label type={size}>
        {label}
        :
      </UI.Label>
      <UI.Value type={size}>
        {value}
      </UI.Value>
    </UI.Item>
  );
};
