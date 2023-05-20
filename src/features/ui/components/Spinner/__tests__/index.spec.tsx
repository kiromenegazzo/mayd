import { render } from '@core/utils/test';

import { Spinner } from '../index';

describe('Component: Spinner', () => {
  it('should render the spinner with default props', () => {
    const { getByRole } = render(<Spinner />);

    const spinnerElement = getByRole('status');

    expect(spinnerElement).toBeInTheDocument();
  });
});
