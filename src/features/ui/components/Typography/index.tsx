import * as UI from './styles';
import { IProps } from './types';

export const Typography = (props: IProps) => {
  const { type = 'p3', weight, tag = 'p', children, ...rest } = props;

  return (
    <UI.Typography {...rest} $type={type} $weight={weight} as={tag} >
      {children}
    </UI.Typography>
  );
};

const { typographyMixin, getSize: getTypographySize, getWeight: getTypographyWeight } = UI;

export {
  typographyMixin,
  getTypographySize,
  getTypographyWeight,
};

export type { TType as TPaginationType } from './types';
