import axios from 'axios';
import queryString from 'query-string';

import { IFetchListParams, IFetchItemParams } from './types';

const apiInstance = axios.create({
  baseURL: '/api',
  paramsSerializer: (params) => queryString.stringify(params, { arrayFormat: 'comma' }),
  transformResponse: [(data) => {
    try {
      return JSON.parse(data);
    } catch (error) {
      throw Error(`Error parsing response JSON data - ${JSON.stringify(error)}`);
    }
  }],
});

export const fetchList = (params: IFetchListParams = {}) => {
  const { service = 'all', path, ...rest } = params;
  const url = path ? `/${service}/${path}` : `/${service}`;

  return apiInstance.get(url, {
    params: rest,
  });
};

export const fetchItem = (params: IFetchItemParams) => {
  const { name, fields } = params;

  return apiInstance.get(`/name/${name}`, {
    params: {
      fields,
      fullText: true,
    },
  });
};

export * from './types';
