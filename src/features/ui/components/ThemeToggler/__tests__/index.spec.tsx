
import { renderWithProvider, act, screen } from '@core/utils/test';

import { TTheme } from '@features/ui/assets/styles';
import { themeAtom } from '@features/ui/store';

import { ThemeToggler } from '../index';

const render = (value: TTheme = 'light') => renderWithProvider(
  <ThemeToggler/>,
  [[themeAtom, value]],
);

describe('Component: ThemeToggler', () => {
  it('should render light theme by default', () => {
    render();

    expect(screen.getByText('Light Mode')).toBeInTheDocument();
  });

  it('should render dark theme when button was clicked', async () => {
    render();

    const buttonElement = screen.getByText('Light Mode');

    await act(async () => {
      buttonElement.click();
    });

    expect(screen.getByText('Dark Mode')).toBeInTheDocument();
  });

  it('should render dark theme when button was clicked', async () => {
    render('dark');

    const buttonElement = screen.getByText('Dark Mode');

    await act(async () => {
      buttonElement.click();
    });

    expect(screen.getByText('Light Mode')).toBeInTheDocument();
  });
});
