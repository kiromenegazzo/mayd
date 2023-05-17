import { ImgHTMLAttributes } from 'react';

export type TAspectRatio = '16/9';

export interface IProps extends
  ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  aspectRatio?: TAspectRatio;
  className?: string;
}

export interface IContainerStyleProps {
  $aspectRatio: TAspectRatio;
}
