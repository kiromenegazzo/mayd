import styled from 'styled-components';

import { Card } from 'features/country/components/Card';
import { SearchOutlineIcon } from 'features/ui/components/Icon';
import { Input } from 'features/ui/components/Input';
import { Select } from 'features/ui/components/Select';

export const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  grid-template-columns: repeat(4, 1fr);
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
