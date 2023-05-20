import { ReactNode, ElementType, JSX } from 'react';

import { TThemePalette } from '@features/ui/assets/styles';

export type TType = 'p1' | 'p2' | 'p3';
export type TWeight = 'light' | 'semiBold' | 'extraBold';
export type TTag =  ElementType | keyof JSX.IntrinsicElements;

export interface IProps {
  type?: TType;
  weight?: TWeight;
  children: ReactNode;
  tag?: TTag;
  className?: string;
}

export interface ITypographyMixinProps extends
  Pick<IProps, 'type' | 'weight'> {
  theme: TThemePalette;
}

export interface ITypographyStyleProps {
  $type: TType;
  $weight?: TWeight;
}
