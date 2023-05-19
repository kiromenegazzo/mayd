import {  useNavigate, useParams } from 'react-router-dom';

import { formatBySeparator } from 'features/core';
import { Borders } from 'features/country/components/Borders';
import { useItemQuery } from 'features/country/hooks/useQuery';
import { Button, ArrowBackOutlineIcon, NoData, Typography } from 'features/ui';

import * as UI from './styles';

export const Content = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data } = useItemQuery({
    name: id as string,
    fields: ['region', 'flags', 'name', 'population', 'capital', 'subregion', 'tld', 'currencies', 'languages', 'borders'],
  });

  if (!data) return <NoData/>;

  const { flags, name, population, region, subregion, capital, tld, currencies, languages, borders } = data;

  return (
    <>
      <Button Icon={ArrowBackOutlineIcon} onClick={() => navigate(-1)}>
        Back
      </Button>
      <UI.Container>
        <UI.Flag alt={flags.alt} src={flags.png}/>
        <UI.Content>
          <UI.Title>
            {name.common}
          </UI.Title>
          <UI.Grid>
            <UI.Column>
              <UI.Item
                label="Native Name"
                value={Object.keys(name.nativeName).map(key => name.nativeName[key].common).join(', ')}
              />
              <UI.Item label="Population" value={formatBySeparator(population)}/>
              <UI.Item label="Region" value={region}/>
              <UI.Item label="Sub region" value={subregion}/>
              <UI.Item label="Capital" value={capital.join(', ')}/>
            </UI.Column>
            <UI.Column>
              <UI.Item label="Top Level Domain" value={tld.join(', ')}/>
              <UI.Item label="Currencies" value={Object.keys(currencies).map(key => currencies[key].name).join(', ')}/>
              <UI.Item label="Languages" value={Object.keys(languages).map(key => languages[key]).join(', ')}/>
            </UI.Column>
          </UI.Grid>
          <UI.Footer>
            <Borders codes={borders} onClick={navigate}/>
          </UI.Footer>
        </UI.Content>
      </UI.Container>
    </>
  );
};
