import styled from 'styled-components';

import { Card } from '@features/country/components/Card';
import { SearchOutlineIcon, Input, Select } from '@features/ui';

export const Controls = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

export const Search = styled(Input)
  .attrs({
    Icon: SearchOutlineIcon,
    htmlType: 'search',
    placeholder: 'Search for a country...',
  })
`
  width: 470px;
`;

export const Filter = styled(Select)
  .attrs({
    placeholder: 'Filter by Region',
  })`
  width: 200px;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 40px;
  margin-top: 40px;
`;

export const Footer = styled.div`
  margin-top: 40px;
`;

export const Item = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;
`;
