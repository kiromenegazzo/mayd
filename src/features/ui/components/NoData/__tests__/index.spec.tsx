import { render } from '@core/utils/test';

import { NoData } from '../index';

describe('Component: NoData', () => {
  describe('Prop: message', () => {
    it('should render default message', () => {
      const { getByText } = render(<NoData />);

      const messageElement = getByText('Data Not Found');

      expect(messageElement).toBeInTheDocument();
    });

    it('should render passed message', () => {
      const { getByText } = render(<NoData message="No data"/>);

      const messageElement = getByText('No data');

      expect(messageElement).toBeInTheDocument();
    });
  });
});
