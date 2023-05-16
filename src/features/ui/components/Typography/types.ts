import { ReactNode } from 'react';

export type TType = 'p1' | 'p2' | 'p3';
export type TWeight = 'light' | 'semiBold' | 'extraBold';

export interface IProps {
  type?: TType;
  weight?: TWeight;
  children: ReactNode;
}

export interface ITypographyMixinProps extends
  Pick<IProps, 'type' | 'weight'> {}

export interface ITypographyStyleProps {
  $type: TType;
  $weight?: TWeight;
}
