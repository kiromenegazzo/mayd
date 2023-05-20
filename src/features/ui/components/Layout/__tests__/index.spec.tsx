import { render } from '@core/utils/test';

import { Layout } from '../index';

const headerTestId = 'header';
const outletTestId = 'outlet';

jest.mock('@features/ui/components/Header', () => ({
  Header: () => <div data-testid={headerTestId}/>,
}));

jest.mock('react-router-dom', () => ({
  Outlet: () => <div data-testid={outletTestId}/>,
}));

describe('Component: Layout', () => {
  it('should render the header', () => {
    const { getByTestId } = render(<Layout/>);

    const headerElement = getByTestId(headerTestId);

    expect(headerElement).toBeInTheDocument();
  });

  it('should render the outlet', () => {
    const { getByTestId } = render(<Layout/>);

    const outletElement = getByTestId(outletTestId);

    expect(outletElement).toBeInTheDocument();
  });
});
