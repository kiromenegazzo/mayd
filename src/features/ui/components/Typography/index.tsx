import * as UI from './styles';
import { IProps } from './types';

export const Typography = (props: IProps) => {
  const { type = 'p3', weight, tag = 'p', children } = props;

  return (
    <UI.Typography $type={type} $weight={weight} as={tag}>
      {children}
    </UI.Typography>
  );
};

const typographyMixin = UI.typographyMixin;

export {
  typographyMixin,
};
