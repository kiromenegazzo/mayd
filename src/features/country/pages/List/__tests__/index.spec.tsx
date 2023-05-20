import { useLocation, useNavigate, createSearchParams } from 'react-router-dom';

import { render, fireEvent } from '@core/utils/test';
import queryString from 'query-string';

import { List } from '../index';

jest.mock('react-router-dom', () => ({
  useLocation: jest.fn(),
  useNavigate: jest.fn(),
  createSearchParams: jest.fn(),
}));

jest.mock('query-string', () => ({
  parse: jest.fn(),
}));

jest.mock('../Content', () => ({
  Content: ({ onPageChange }: any) => <div onClick={() => onPageChange(2)}>Content</div>,
}));

jest.mock('@features/ui', () => ({
  Spinner: () => <div>Spinner</div>,
  Input: ({ Icon, htmlType, ...props }: any) => <input {...props} name="Input" type="search"/>,
  Select: (props: any) => <input {...props} type="text"/>,
  Typography: () => <div>Typography</div>,
}));

window.HTMLElement.prototype.scrollIntoView = function () {};

describe('Page: List', () => {
  const mockNavigate = jest.fn();
  const mockLocation = {
    search: '',
  };

  beforeEach(() => {
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
    (useLocation as jest.Mock).mockReturnValue(mockLocation);
    (queryString.parse as jest.Mock).mockReturnValue({});
    (createSearchParams as jest.Mock).mockReturnValue({ toString: jest.fn().mockReturnValue('') });
  });

  it('should render controls and Content component', () => {
    const { getByText, getByRole, queryByText } = render(<List />);

    expect(getByRole('searchbox')).toBeInTheDocument();
    expect(getByRole('textbox')).toBeInTheDocument();
    expect(getByText('Content')).toBeInTheDocument();
    expect(queryByText('Spinner')).not.toBeInTheDocument();
  });

  it('should handle search input and navigate on "Enter" key press', () => {
    const { getByRole } = render(<List />);

    const inputElement = getByRole('searchbox');

    fireEvent.keyDown(inputElement, { code: 'Enter', target: { value: 'search value' } });

    expect(mockNavigate).toHaveBeenCalledWith({ search: '' });
    expect(createSearchParams).toHaveBeenCalledWith({ search: 'search value' });
    expect((createSearchParams as jest.Mock).mock.results[0].value.toString).toHaveBeenCalled();
  });

  it('should handle filter select change and navigate', () => {
    const { getByRole } = render(<List />);

    const selectElement = getByRole('textbox');

    fireEvent.change(selectElement, { target: { value: 'region value' } });

    expect(mockNavigate).toHaveBeenCalledWith({ search: '' });
    expect(createSearchParams).toHaveBeenCalledWith({ region: 'region value' });
    expect((createSearchParams as jest.Mock).mock.results[0].value.toString).toHaveBeenCalled();
  });

  it('should handle page change and navigate', () => {
    const { getByText } = render(<List />);

    const contentElement = getByText('Content');

    contentElement.click();

    expect(mockNavigate).toHaveBeenCalledWith({ search: '' });
    expect(createSearchParams).toHaveBeenCalledWith({ page: '2' });
    expect((createSearchParams as jest.Mock).mock.results[0].value.toString).toHaveBeenCalled();
  });
});
