import { ICountryDetail } from '@features/country/types/entities';

export type TService = 'all' | 'name' | 'region' | 'alpha';

export type TFields = (keyof ICountryDetail)[];

export interface IFetchListParams {
  path?: string;
  fields?: TFields;
  service?: TService;
  codes?: string[];
  fullText?: boolean;
}

export interface IFetchItemParams {
  name: string;
  fields?: TFields;
}
