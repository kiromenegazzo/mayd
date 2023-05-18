import { TRegion } from 'features/country/types/entities';
import { IPaginationProps, ISelectOption } from 'features/ui';

export interface IRegionOption extends
  ISelectOption<TRegion> {}

export interface IContentProps {
  region: string;
  search: string;
  page: number;
  onCardClick: (value: string) => void;
  onPageChange: IPaginationProps['onChange'];
}
