import { render } from 'features/core';

import { Spinner } from '../index';

describe('Component: Spinner', () => {
  it('should render the spinner with default props', () => {
    const { getByRole } = render(<Spinner />);

    const spinnerElement = getByRole('status');

    expect(spinnerElement).toBeInTheDocument();
  });
});
