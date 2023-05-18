import { ICountryDetail } from 'features/country/types/entities';

export type TService = 'all' | 'name' | 'region' | 'alpha';

export interface IFetchListParams {
  path?: string;
  fields?: (keyof ICountryDetail)[];
  service?: TService;
  codes?: string[];
  fullText?: boolean;
}

export interface IFetchItemParams {
  name: string;
  fields?: (keyof ICountryDetail)[];
}
