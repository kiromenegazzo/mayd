import { render } from '@core/utils/test';

import { Error404 } from '../index';

describe('Page: Error404', () => {
  it('should render the Error 404 page correctly', () => {
    const { getByText } = render(<Error404 />);

    const headingElement = getByText('Error 404');
    const messageElement = getByText('Page not found');

    expect(headingElement).toBeInTheDocument();
    expect(messageElement).toBeInTheDocument();
  });
});
