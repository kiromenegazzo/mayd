import { lightTheme, darkTheme } from 'features/ui/assets/styles';
import { themeAtom } from 'features/ui/store';
import { useAtomValue } from 'jotai';
import { ThemeProvider as SCThemeProvider } from 'styled-components';

import { IProps } from './types';

export const ThemeProvider = (props: IProps) => {
  const { children } = props;

  const value = useAtomValue(themeAtom);

  return (
    <SCThemeProvider theme={value === 'light' ? lightTheme : darkTheme}>
      {children}
    </SCThemeProvider>
  );
};
