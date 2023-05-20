import { render, fireEvent } from '@core/utils/test';

import { Pagination } from '../index';

describe('Prop: Pagination', () => {
  it('should render the pagination component correctly', () => {
    const { getByText } = render(
      <Pagination limit={10} page={1} total={100} onChange={() => {}} />,
    );

    const prevButton = getByText('Prev');
    const nextButton = getByText('Next');
    const pagesText = getByText('Page 1 of 10');

    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
    expect(pagesText).toBeInTheDocument();
  });

  describe('Prop: onChange', () => {
    it('should call onChange with the next page number when Next button is clicked', () => {
      const mockedOnChange = jest.fn();
      const { getByText } = render(
        <Pagination limit={10} page={1} total={100} onChange={mockedOnChange} />,
      );

      const nextButton = getByText('Next');

      fireEvent.click(nextButton);

      expect(mockedOnChange).toHaveBeenCalledWith(2);
    });

    it('should call onChange with the previous page number when Prev button is clicked', () => {
      const mockedOnChange = jest.fn();
      const { getByText } = render(
        <Pagination limit={10} page={2} total={100} onChange={mockedOnChange} />,
      );

      const prevButton = getByText('Prev');

      fireEvent.click(prevButton);

      expect(mockedOnChange).toHaveBeenCalledWith(1);
    });

    it('should not call onChange when Next button is clicked on the last page', () => {
      const mockedOnChange = jest.fn();
      const { getByText } = render(
        <Pagination limit={10} page={10} total={100} onChange={mockedOnChange} />,
      );

      const nextButton = getByText('Next');

      fireEvent.click(nextButton);

      expect(mockedOnChange).not.toHaveBeenCalled();
    });

    it('should not call onChange when Prev button is clicked on the first page', () => {
      const mockedOnChange = jest.fn();
      const { getByText } = render(
        <Pagination limit={10} page={1} total={100} onChange={mockedOnChange} />,
      );

      const prevButton = getByText('Prev');

      fireEvent.click(prevButton);

      expect(mockedOnChange).not.toHaveBeenCalled();
    });
  });
});
