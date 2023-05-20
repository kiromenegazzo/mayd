import { Link } from 'react-router-dom';

import { ThemeToggler } from '@features/ui/components/ThemeToggler';

import * as UI from './styles';

export const Header = () => {
  return (
    <UI.Header>
      <UI.Container>
        <Link to="/">
          <UI.Title>
            Where in the world?
          </UI.Title>
        </Link>
        <ThemeToggler/>
      </UI.Container>
    </UI.Header>
  );
};
