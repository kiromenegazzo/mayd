import styled from 'styled-components';

import { Typography } from '@features/ui/components/Typography';

import { IContainerStyleProps, IImageStyleProps } from './types';

const getPaddingByAspectRatio = (value: string) =>{
  switch (value) {
    case '16/9':
    default:
      return 56.25;
  }
};

export const Container = styled.div<IContainerStyleProps>`
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: ${({ $aspectRatio }) => getPaddingByAspectRatio($aspectRatio)}%;
`;

export const Image = styled.img<IImageStyleProps>`
  position: absolute;
  object-fit: ${({ $objectFit }) => $objectFit};
  width: 100%;
  max-width: 100%;
  height: 100%;
`;

export const Placeholder = styled(Typography)``;
