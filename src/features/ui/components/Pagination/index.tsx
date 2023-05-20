import { Button } from '@features/ui/components/Button';

import * as UI from './styles';
import { IProps } from './types';

export const Pagination = (props: IProps) => {
  const { page, total, limit, onChange } = props;

  const totalPages = Math.ceil(total / limit);

  const handleNextPage = () => {
    if (page < totalPages) {
      onChange(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      onChange(page - 1);
    }
  };

  return (
    <UI.Container>
      <Button disabled={page === 1} onClick={handlePrevPage}>
        Prev
      </Button>
      <UI.Pages>
        Page
        {' '}
        {page}
        {' '}
        of
        {' '}
        {totalPages}
      </UI.Pages>
      <Button disabled={page === totalPages} onClick={handleNextPage}>
        Next
      </Button>
    </UI.Container>
  );
};

export type { IProps as IPaginationProps } from './types';
