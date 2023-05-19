import { ImgHTMLAttributes } from 'react';

export type TAspectRatio = '16/9';
export type TObjectFit = 'contain' | 'cover';

export interface IProps extends
  ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  aspectRatio?: TAspectRatio;
  objectFit?: TObjectFit;
  className?: string;
}

export interface IContainerStyleProps {
  $aspectRatio: TAspectRatio;
}

export interface IImageStyleProps {
  $objectFit: TObjectFit;
}
