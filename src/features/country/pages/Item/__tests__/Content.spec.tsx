import { useNavigate, useParams } from 'react-router-dom';

import { formatBySeparator } from '@core/utils/number';
import { render, fireEvent } from '@core/utils/test';

import { useItemQuery } from '@features/country/hooks/useQuery';

import { Content } from '../Content';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
  useParams: jest.fn(),
}));

jest.mock('@features/country/hooks/useQuery', () => ({
  useItemQuery: jest.fn(),
}));

jest.mock('@features/country/components/Borders', () => ({
  Borders: () => <div>Borders</div>,
}));

jest.mock('@features/ui', () => ({
  Button:({ children, onClick }: any) => (
    <button onClick={onClick}>{children}</button>
  ),
  NoData: () => <div>NoData</div>,
  Image: ({ alt, ...props }: any) => <img {...props} alt={alt}/>,
  LabelValue: ({ value }: any) => <div>{value}</div>,
  Typography: (props: any) => <div {...props}/>,
  Spinner: () => <div>Spinner</div>,
  media: {
    desktop: jest.fn(),
    tablet: jest.fn(),
  },
}));

jest.mock('@core/utils/number', () => ({
  formatBySeparator: jest.fn(),
}));

describe('Component: Content', () => {
  const mockNavigate = jest.fn();
  const mockUseParams = () => ({ id: 'test-id' });
  const mockUseItemQuery = () => ({
    data: {
      flags: { alt: 'alt', svg: 'image-url' },
      name: { common: 'Country Name', nativeName: { eng: { common: 'English Name' } } },
      population: 1000000,
      region: 'Region',
      subregion: 'Subregion',
      capital: ['Capital'],
      tld: ['tld'],
      currencies: { USD: { name: 'US Dollar' } },
      languages: { eng: 'English' },
      borders: ['border1', 'border2'],
    },
  });

  beforeEach(() => {
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
    (useParams as jest.Mock).mockImplementation(mockUseParams);
    (useItemQuery as jest.Mock).mockImplementation(mockUseItemQuery);
    (formatBySeparator as jest.Mock).mockReturnValue('formatted-population');
  });

  it('should render content with country details', () => {
    const { getByText, getByAltText, queryByText } = render(<Content />);

    expect(getByText('Back')).toBeInTheDocument();
    expect(getByAltText('alt')).toBeInTheDocument();
    expect(getByText('Country Name')).toBeInTheDocument();
    expect(getByText('English Name')).toBeInTheDocument();
    expect(getByText('formatted-population')).toBeInTheDocument();
    expect(getByText('Region')).toBeInTheDocument();
    expect(getByText('Subregion')).toBeInTheDocument();
    expect(getByText('Capital')).toBeInTheDocument();
    expect(getByText('tld')).toBeInTheDocument();
    expect(getByText('US Dollar')).toBeInTheDocument();
    expect(getByText('English')).toBeInTheDocument();
    expect(queryByText('NoData')).not.toBeInTheDocument();
  });

  it('should render no data', () => {
    (useItemQuery as jest.Mock).mockImplementation(() => ({ data: null }));

    const { getByText } = render(<Content />);

    expect(getByText('NoData')).toBeInTheDocument();
  });

  it('should handle back button click', () => {
    const { getByText } = render(<Content />);
    const backButton = getByText('Back');

    fireEvent.click(backButton);

    expect(mockNavigate).toHaveBeenCalledWith(-1);
  });
});
