import { renderHook, waitFor } from '@core/utils/test';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { fetchList, fetchItem, IFetchItemParams, IFetchListParams } from '@features/country/api';

import { useListQuery, useItemQuery } from '../useQuery';

jest.mock('@features/country/api', () => ({
  fetchList: jest.fn(),
  fetchItem: jest.fn(),
}));

const queryClient = new QueryClient();
const wrapper = ({ children }: any) => (
  <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
);

describe('Hook: useQuery', () => {
  beforeEach(() => {
    queryClient.clear();
  });

  describe('useListQuery', () => {
    it('should return data when fetchList succeeds', async () => {
      const mockData = [{ id: 1, name: 'Country 1' }, { id: 2, name: 'Country 2' }];
      const params = { service: 'all' };

      (fetchList as jest.Mock).mockResolvedValueOnce({ data: mockData });

      const { result } = renderHook(() => useListQuery(params as IFetchListParams), { wrapper });

      expect(result.current.isLoading).toBe(true);

      await waitFor(() => {
        expect(result.current.data).toEqual(mockData);
        expect(result.current.isLoading).toBe(false);
        expect(result.current.error).toBeNull();
      });
    });

    it('should return empty array when fetchList fails', async () => {
      const params = { service: 'all' };

      (fetchList as jest.Mock).mockRejectedValueOnce(new Error('Failed to fetch data'));

      const { result } = renderHook(() => useListQuery(params as IFetchListParams), { wrapper });

      expect(result.current.isLoading).toBe(true);

      await waitFor(() => {
        expect(result.current.data).toEqual([]);
        expect(result.current.isLoading).toBe(false);
        expect(result.current.error).toBeNull();
      });
    });
  });

  describe('useItemQuery', () => {
    it('should return data when fetchItem succeeds', async () => {
      const mockData = { id: 1, name: 'Country 1' };
      const params = { name: 'Country 1' };

      (fetchItem as jest.Mock).mockResolvedValueOnce({ data: [mockData] });

      const { result } = renderHook(() => useItemQuery(params as IFetchItemParams), { wrapper });

      expect(result.current.isLoading).toBe(true);

      await waitFor(() => {
        expect(result.current.data).toEqual(mockData);
        expect(result.current.isLoading).toBe(false);
        expect(result.current.error).toBeNull();
      });
    });

    it('should return null when fetchItem fails', async () => {
      const params = { name: 'Country 1' };

      (fetchItem as jest.Mock).mockRejectedValueOnce(new Error('Failed to fetch data'));

      const { result } = renderHook(() => useItemQuery(params as IFetchItemParams), { wrapper });

      expect(result.current.isLoading).toBe(true);

      await waitFor(() => {
        expect(result.current.data).toBeNull();
        expect(result.current.isLoading).toBe(false);
        expect(result.current.error).toBeNull();
      });
    });
  });
});
