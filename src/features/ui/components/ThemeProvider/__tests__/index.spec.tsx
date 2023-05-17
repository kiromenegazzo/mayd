import { renderWithProvider, screen } from 'features/core';
import { TTheme } from 'features/ui';
import { themeAtom } from 'features/ui/store';

import { ThemeProvider } from '../index';

const childrenText = 'children';

const render = (value: TTheme = 'light') => renderWithProvider(
  <ThemeProvider>
    {childrenText}
  </ThemeProvider>,
  [[themeAtom, value]],
);

describe('Component: ThemeProvider', () => {
  it('should render light theme', () => {
    render();

    expect(screen.getByText(childrenText)).toBeInTheDocument();
  });

  it('should render dark theme', () => {
    render('dark');

    expect(screen.getByText(childrenText)).toBeInTheDocument();
  });
});
