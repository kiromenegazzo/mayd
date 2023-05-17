import { useState } from 'react';

import { Button } from 'features/ui/components/Button';

import * as UI from './styles';
import { IProps } from './types';

export const Pagination = (props: IProps) => {
  const { total, limit } = props;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(total / limit);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <UI.Container>
      <Button disabled={currentPage === 1} onClick={handlePrevPage}>
        Prev
      </Button>
      <UI.Pages>
        Page
        {' '}
        {currentPage}
        {' '}
        of
        {' '}
        {totalPages}
      </UI.Pages>
      <Button disabled={currentPage === totalPages} onClick={handleNextPage}>
        Next
      </Button>
    </UI.Container>
  );
};
