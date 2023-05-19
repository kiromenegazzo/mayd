import { isValidElement } from 'react';

import * as UI from './styles';
import { IProps } from './types';

export const LabelValue = (props: IProps) => {
  const { label, value, size, className } = props;

  return (
    <UI.Item className={className}>
      <UI.Label type={size}>
        {label}
        :
      </UI.Label>
      {isValidElement(value) ? value : (
        <UI.Value type={size}>
          {value}
        </UI.Value>
      )}
    </UI.Item>
  );
};
