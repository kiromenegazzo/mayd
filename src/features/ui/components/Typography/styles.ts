import styled, { css } from 'styled-components';

import { lightTheme } from 'features/ui/assets/styles';

import { ITypographyStyleProps, ITypographyMixinProps, TType, TWeight } from './types';

export const getSize = (value?: TType) => {
  switch (value) {
    case 'p1':
      return 24;
    case 'p2':
      return 16;
    case 'p3':
    default:
      return 14;
  }
};

export const getWeight = (type?: TType, value?: TWeight) => {
  if (value) {
    switch (value) {
      case 'extraBold':
        return 800;
      case 'semiBold':
        return 600;
      case 'light':
      default:
        return 300;
    }
  }

  switch (type) {
    case 'p1':
      return 800;
    case 'p2':
      return 600;
    case 'p3':
    default:
      return 300;
  }
};

export const typographyMixin = (props: ITypographyMixinProps) => {
  const { type = 'p3', weight, theme } = props;

  return css`
    margin: 0;
    color: ${theme.text};
    font-weight: ${getWeight(type, weight)};
    font-size: ${getSize(type)}px;
    font-family: 'Nunito Sans', sans-serif;
    line-height: 1.2;
  `;
};

export const Typography = styled.p<ITypographyStyleProps>`
  ${({ $weight, $type, theme }) => typographyMixin({
    type: $type,
    weight: $weight,
    theme,
  })}
`;

Typography.defaultProps = {
  theme: lightTheme,
};
