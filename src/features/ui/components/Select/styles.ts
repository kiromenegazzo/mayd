import styled, { css } from 'styled-components';

import { BORDER_RADIUS } from 'features/ui/assets/styles';
import { lightTheme } from 'features/ui/assets/styles';
import { ChevronDownOutlineIcon } from 'features/ui/components/Icon';
import { Typography, typographyMixin } from 'features/ui/components/Typography';
import { filterTheme } from 'features/ui/utils/styles';

import { IArrowDownStyleProps } from './types';

export const Container = styled.div`
  position: relative;
`;

export const Input = styled.div`
  display: flex;
  gap: 12px;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  border-radius: ${BORDER_RADIUS}px;
  background-color: ${({ theme }) => theme.element};
  cursor: pointer;
`;

Input.defaultProps = {
  theme: lightTheme,
};

export const Placeholder = styled(Typography)
  .attrs({ type: 'p3' })``;

export const ArrowIcon = styled(ChevronDownOutlineIcon)
  .withConfig({
    shouldForwardProp: filterTheme,
  })<IArrowDownStyleProps>`
  width: 16px;
  height: 16px;
  color: ${({ theme }) => theme.text};
  transition: transform .25s ease-out;
  
  ${({ $isVisible }) => $isVisible && css`
    transform: scaleY(-1);
  `}}
`;

ArrowIcon.defaultProps = {
  theme: lightTheme,
};

export const Dropdown = styled.div`
  position: absolute;
  left: 0;
  z-index: 1;
  width: 100%;
  margin-top: 4px;
  padding: 10px;
  border-radius: ${BORDER_RADIUS}px;
  background-color: ${({ theme }) => theme.element};
`;

Dropdown.defaultProps = {
  theme: lightTheme,
};

export const Option = styled.div`
  ${({ theme }) => typographyMixin({ theme, type: 'p3' })};
  
  padding: 6px 10px;
  cursor: pointer;
`;

Option.defaultProps = {
  theme: lightTheme,
};
