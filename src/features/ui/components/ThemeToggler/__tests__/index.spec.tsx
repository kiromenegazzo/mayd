import { act, render as rtlRender, screen } from '@testing-library/react';
import { Provider } from 'jotai';

import { ThemeToggler } from '../index';

const render = () => rtlRender(
  <Provider>
    <ThemeToggler/>
  </Provider>,
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
    render();

    const lightButtonElement = screen.getByText('light mode');

    await act(async () => {
      lightButtonElement.click();
    });

    const darkButtonElement = screen.getByText('dark mode');

    await act(async () => {
      darkButtonElement.click();
    });

    expect(lightButtonElement).toBeInTheDocument();
  });
});
