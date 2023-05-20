import { render } from '@core/utils/test';

import { useListQuery } from '@features/country/hooks/useQuery';

import { Content } from '../Content';

jest.mock('@features/country/hooks/useQuery', () => ({
  useListQuery: jest.fn(),
}));

jest.mock('@features/ui', () => ({
  NoData: () => <div>No Data</div>,
  Pagination: () => <div>Pagination</div>,
  Typography: () => <div>Typography</div>,
  Button: () => <div>Button</div>,
  Input: () => <div>Input</div>,
  Select: () => <div>Select</div>,
}));

jest.mock('@features/country/components/Card', () => ({
  Card: (props: any) => <div {...props} data-testid="item">Card</div>,
}));

describe('Component: Content', () => {
  const mockData = [
    { name: { official: 'Country 1', common: 'Country 1' }, population: 1000000, region: 'Region 1', flags: { svg: 'flag1.svg' }, capital: ['Capital 1'] },
    { name: { official: 'Country 2', common: 'Country 2' }, population: 2000000, region: 'Region 2', flags: { svg: 'flag2.svg' }, capital: ['Capital 2'] },
  ];
  const defaultProps = { page: 1, region: 'region', search: 'Search', onCardClick: () => {}, onPageChange: () => {} };

  beforeEach(() => {
    (useListQuery as jest.Mock).mockReturnValue({ data: mockData });
  });

  it('should render NoData component when data is empty', () => {
    (useListQuery as jest.Mock).mockReturnValue({ data: [] });

    const { getByText } = render(<Content {...defaultProps} />);

    expect(getByText('No Data')).toBeInTheDocument();
  });


  it('should render content and pagination when data is not empty', () => {
    const { getByText, getAllByTestId } = render(<Content {...defaultProps} />);

    expect(getAllByTestId('item')).toHaveLength(mockData.length);
    expect(getByText('Pagination')).toBeInTheDocument();
  });

  describe('Prop: onCardClick', () => {
    it('should call onCardClick handler', () => {
      const mockedOnCardClick = jest.fn();

      const { getAllByTestId } = render(<Content {...defaultProps} onCardClick={mockedOnCardClick}/>);

      const itemElement = getAllByTestId('item');

      itemElement[0].click();

      expect(mockedOnCardClick).toBeCalled();
    });
  });
});
