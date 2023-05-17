import { ThemeToggler } from 'features/ui/components/ThemeToggler';

import * as UI from './styles';

export const Header = () => {
  return (
    <UI.Header>
      <UI.Container>
        <UI.Title>
          Where in the world?
        </UI.Title>
        <ThemeToggler/>
      </UI.Container>
    </UI.Header>
  );
};
