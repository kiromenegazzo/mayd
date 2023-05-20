import { render, fireEvent } from '@core/utils/test';

import { useListQuery } from '@features/country/hooks/useQuery';

import { Borders } from '../index';

jest.mock('@features/country/hooks/useQuery', () => ({
  useListQuery: jest.fn(),
}));

jest.mock('@features/ui', () => ({
  Button: ({ children, onClick }: any) => (
    <button onClick={onClick}>{children}</button>
  ),
  Typography: ({ children }: any) => (
    <div>{children}</div>
  ),
  LabelValue: ({ value }: any) => (
    <div>{value}</div>
  ),
}));

describe('Component: Borders', () => {
  const mockUseListQuery = jest.fn().mockReturnValue({
    data: [
      { name: { common: 'Border 1' } },
      { name: { common: 'Border 2' } },
    ],
  });

  beforeEach(() => {
    (useListQuery as jest.Mock).mockImplementation(mockUseListQuery);
  });

  it('should render border countries', () => {
    const { getByText, queryByText } = render(<Borders codes={['code1', 'code2']} onClick={jest.fn()} />);

    expect(getByText('Border 1')).toBeInTheDocument();
    expect(getByText('Border 2')).toBeInTheDocument();
    expect(queryByText('—')).not.toBeInTheDocument();
  });

  it('should handle button click', () => {
    const mockOnClick = jest.fn();

    const { getByText } = render(<Borders codes={['code1', 'code2']} onClick={mockOnClick} />);
    const button = getByText('Border 1');

    fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalledWith('/Border 1');
  });

  it('should render placeholder when no border countries', () => {
    (useListQuery as jest.Mock).mockReturnValue({ data: [] });

    const { getByText } = render(<Borders codes={['code1', 'code2']} onClick={jest.fn()} />);

    expect(getByText('—')).toBeInTheDocument();
  });
});
