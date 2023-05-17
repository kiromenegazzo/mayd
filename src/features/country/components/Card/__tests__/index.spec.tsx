import { render } from 'features/ui';

import { Card } from '../index';

const country = {
  name: 'Country Name',
  population: 1234567,
  region: 'Country Region',
  capital: 'Country Capital',
};

describe('Component: Card', () => {
  describe('Prop: name', () => {
    test('should render the card with the correct name', () => {
      const { getByText } = render(<Card {...country} />);

      const nameElement = getByText('Country Name');

      expect(nameElement).toBeInTheDocument();
    });
  });

  describe('Prop: population', () => {
    test('should render the card with the correct population', () => {
      const { getByText } = render(<Card {...country} />);

      const populationElement = getByText('1234567');

      expect(populationElement).toBeInTheDocument();
    });
  });

  describe('Prop: region', () => {
    test('should render the card with the correct region', () => {
      const { getByText } = render(<Card {...country} />);

      const regionElement = getByText('Country Region');

      expect(regionElement).toBeInTheDocument();
    });
  });

  describe('Prop: capital', () => {
    test('should render the card with the correct capital', () => {
      const { getByText } = render(<Card {...country} />);

      const capitalElement = getByText('Country Capital');

      expect(capitalElement).toBeInTheDocument();
    });
  });
});
