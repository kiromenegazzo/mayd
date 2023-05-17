import { render } from 'features/core';

import { Header } from '../index';

const themeTogglerTestId = 'theme-toggler';

jest.mock('features/ui/components/ThemeToggler', () => ({
  ThemeToggler: () => <div data-testid={themeTogglerTestId}/>,
}));

describe('Component: Header', () => {
  it('should render the header title correctly', () => {
    const { getByText } = render(<Header />);
    const titleElement = getByText('Where in the world?');

    expect(titleElement).toBeInTheDocument();
  });

  it('should render the theme toggler', () => {
    const { getByTestId } = render(<Header />);
    const themeTogglerElement = getByTestId(themeTogglerTestId);

    expect(themeTogglerElement).toBeInTheDocument();
  });
});
