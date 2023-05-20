import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { fetchList, fetchItem, IFetchItemParams, IFetchListParams } from '@features/country/api';
import { ICountryBase, ICountryDetail } from '@features/country/types/entities';

export const useListQuery = (
  params?: IFetchListParams,
  options?: UseQueryOptions<ICountryBase[], AxiosError, ICountryBase[]>,
) => useQuery({
  ...options,
  queryKey: ['countryList', params],
  queryFn: async () => {
    try {
      const response = await fetchList(params);

      return response.data || [];
    } catch {
      return [];
    }
  },
});

export const useItemQuery = (
  params: IFetchItemParams,
  options?: UseQueryOptions<ICountryDetail, AxiosError, ICountryDetail>,
) => useQuery({
  ...options,
  queryKey: ['countryItem', params.name],
  queryFn: async () => {
    try {
      const response = await fetchItem(params);

      return response.data[0];
    } catch {
      return null;
    }
  },
});

