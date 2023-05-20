import { render } from '@core/utils/test';

import { LabelValue } from '../index';

describe('Component: LabelValue', () => {
  describe('Prop: label', () => {
    it('should render label correctly', () => {
      const label = 'Name';
      const value = 'John Doe';

      const { getByText } = render(<LabelValue label={label} value={value} />);

      const labelElement = getByText(label + ':');

      expect(labelElement).toBeInTheDocument();
    });
  });

  describe('Prop: className', () => {
    it('should render custom className correctly', () => {
      const className = 'custom-class';

      const { container } = render(<LabelValue className={className} label="Label" value="Value" />);

      expect(container.firstChild).toHaveClass(className);
    });
  });

  describe('Prop: value', () => {
    it('should render child element if value is a valid React element', () => {
      const ChildComponent = () => <span>Child Component</span>;

      const { getByText } = render(<LabelValue label="Label" value={<ChildComponent />} />);

      const childElement = getByText('Child Component');

      expect(childElement).toBeInTheDocument();
    });

    it('should render value as text if it is not a valid React element', () => {
      const value = '12345';

      const { getByText } = render(<LabelValue label="Label" value={value} />);

      const valueElement = getByText(value);

      expect(valueElement).toBeInTheDocument();
    });
  });
});
