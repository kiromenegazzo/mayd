import { render } from '@core/utils/test';

import { Card } from '../index';

const country = {
  name: 'Country Name',
  population: 1234567,
  region: 'Country Region',
  capital: 'Country Capital',
  flag: 'Country image',
};

jest.mock('@features/ui/components/Image', () => ({
  Image: (props: any) => <div>{props.src}</div>,
}));

jest.mock('@core/utils/number', () => ({
  formatBySeparator: (value: number) => value,
}));

describe('Component: Card', () => {
  describe('Prop: name', () => {
    it('should render the card with the correct name', () => {
      const { getByText } = render(<Card {...country} />);

      const nameElement = getByText('Country Name');

      expect(nameElement).toBeInTheDocument();
    });
  });

  describe('Prop: population', () => {
    it('should render the card with the correct population', () => {
      const { getByText } = render(<Card {...country} />);

      const populationElement = getByText('1234567');

      expect(populationElement).toBeInTheDocument();
    });
  });

  describe('Prop: region', () => {
    it('should render the card with the correct region', () => {
      const { getByText } = render(<Card {...country} />);

      const regionElement = getByText('Country Region');

      expect(regionElement).toBeInTheDocument();
    });
  });

  describe('Prop: capital', () => {
    it('should render the card with the correct capital', () => {
      const { getByText } = render(<Card {...country} />);

      const capitalElement = getByText('Country Capital');

      expect(capitalElement).toBeInTheDocument();
    });
  });

  describe('Prop: flag', () => {
    it('should render the card with the correct flag', () => {
      const { getByText } = render(<Card {...country} />);

      const flagElement = getByText('Country image');

      expect(flagElement).toBeInTheDocument();
    });
  });
});
