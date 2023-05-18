import { TRegion } from 'features/country/types/entities';
import { IProps as IPaginationProps } from 'features/ui/components/Pagination';
import { IOption } from 'features/ui/components/Select';

export interface IRegionOption extends
  IOption<TRegion> {}

export interface IContentProps {
  region: string;
  search: string;
  page: number;
  onCardClick: (value: string) => void;
  onPageChange: IPaginationProps['onChange'];
}
