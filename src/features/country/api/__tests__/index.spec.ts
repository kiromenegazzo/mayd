import MockAdapter from 'axios-mock-adapter';

import { fetchList, fetchItem, IFetchListParams, apiInstance, IFetchItemParams } from '../index';

const listResponseData = [{ id: 1, name: 'Country 1' }];
const itemResponseData = [{ id: 1, name: 'Country 1', population: 100000 }];

const adapter = new MockAdapter(apiInstance);

describe('Api', () => {
  it('should reject with error message', async () => {
    adapter.onGet('/api/name/Country1').reply(500);

    await expect(fetchItem({ name: 'Country1' } as IFetchItemParams)).rejects.toEqual(new Error('Error parsing response JSON data - {}'));
  });

  describe('fetchList', () => {
    it('should make a GET request with correct URL and query params', async () => {
      adapter.onGet('/api/all/countries').reply(200, JSON.stringify(listResponseData));

      const response = await fetchList({ service: 'all', path: 'countries' } as IFetchListParams);

      expect(response.data).toEqual(listResponseData);
    });

    it('should make a GET request with default params', async () => {
      adapter.onGet('/api/all').reply(200, JSON.stringify(listResponseData));

      const response = await fetchList();

      expect(response.data).toEqual(listResponseData);
    });
  });

  describe('fetchItem', () => {
    it('should make a GET request with correct URL and query params', async () => {
      adapter.onGet('/api/name/Country1').reply(200, JSON.stringify(itemResponseData));

      const response = await fetchItem({ name: 'Country1' } as IFetchItemParams);

      expect(response.data).toEqual(itemResponseData);
    });
  });
});
