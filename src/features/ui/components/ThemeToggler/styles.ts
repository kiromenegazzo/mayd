import styled from 'styled-components';

import { lightTheme } from 'features/ui/assets/styles';
import { MoonOutlineIcon } from 'features/ui/components/Icon';
import { Typography } from 'features/ui/components/Typography';

export const Toggler = styled.button
  .attrs({ type: 'button' })`
  display: flex;
  gap: 8px;
  align-items: center;
  border: none;  
  background-color: transparent;
  cursor: pointer;
`;

export const MoonIcon = styled(MoonOutlineIcon)
  .withConfig({
    shouldForwardProp: (prop) => !['theme'].includes(prop),
  })`
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

MoonIcon.defaultProps = {
  theme: lightTheme,
};

export const Text = styled(Typography)
  .attrs({ type: 'p2', tag: 'span' })``;
