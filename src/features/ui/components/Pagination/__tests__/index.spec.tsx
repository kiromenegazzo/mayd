import { render, fireEvent } from 'features/ui/utils/test';

import { Pagination } from '../index';

describe('Component: Pagination', () => {
  it('should render correctly with current page and total pages', () => {
    const { getByText } = render(<Pagination limit={5} total={20} />);

    expect(getByText('Page 1 of 4')).toBeInTheDocument();
  });

  it('should disable "Prev" button on first page', () => {
    const { getByText } = render(<Pagination limit={5} total={20} />);
    const prevButton = getByText('Prev');

    expect(prevButton).toBeDisabled();
  });

  it('should disable "Next" button on last page', () => {
    const { getByText } = render(<Pagination limit={5} total={5} />);
    const nextButton = getByText('Next');

    expect(nextButton).toBeDisabled();
  });

  it('should navigate to next page on "Next" button click', () => {
    const { getByText } = render(<Pagination limit={5} total={20} />);
    const nextButton = getByText('Next');

    fireEvent.click(nextButton);

    expect(getByText('Page 2 of 4')).toBeInTheDocument();
  });

  it('should navigate to previous page on "Prev" button click', () => {
    const { getByText } = render(<Pagination limit={5} total={20} />);
    const nextButton = getByText('Next');
    const prevButton = getByText('Prev');

    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(prevButton);

    expect(getByText('Page 2 of 4')).toBeInTheDocument();
  });
});
