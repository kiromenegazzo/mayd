import { TTheme } from 'features/ui';
import { themeAtom } from 'features/ui/store';
import { renderWithProvider, act, screen } from 'features/ui/utils/test';

import { ThemeToggler } from '../index';

const render = (value: TTheme = 'light') => renderWithProvider(
  <ThemeToggler/>,
  [[themeAtom, value]],
);

describe('Component: ThemeToggler', () => {
  it('should render light theme by default', () => {
    render();

    expect(screen.getByText('light mode')).toBeInTheDocument();
  });

  it('should render dark theme when button was clicked', async () => {
    render();

    const buttonElement = screen.getByText('light mode');

    await act(async () => {
      buttonElement.click();
    });

    expect(screen.getByText('dark mode')).toBeInTheDocument();
  });

  it('should render dark theme when button was clicked', async () => {
    render('dark');

    const darkButtonElement = screen.getByText('dark mode');

    await act(async () => {
      darkButtonElement.click();
    });

    const lightButtonElement = screen.getByText('light mode');

    expect(lightButtonElement).toBeInTheDocument();
  });
});
