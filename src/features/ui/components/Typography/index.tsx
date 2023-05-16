import * as UI from './styles';
import { IProps } from './types';

export const Typography = (props: IProps) => {
  const { type = 'p3', weight, children } = props;

  return (
    <UI.Typography $type={type} $weight={weight}>
      {children}
    </UI.Typography>
  );
};
