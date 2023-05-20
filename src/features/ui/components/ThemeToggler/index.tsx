import { useLocalStorage } from 'features/core';
import { TTheme } from 'features/ui';
import { useTheme } from 'features/ui/hooks/useTheme';

import * as UI from './styles';

export const ThemeToggler = () => {
  const { onSet } = useLocalStorage<TTheme>('theme');
  const [theme, setTheme] = useTheme();

  const handleClick = () => {
    const value = theme === 'light' ? 'dark' : 'light';

    setTheme(value);
    onSet(value);
  };

  return (
    <UI.Toggler onClick={handleClick}>
      <UI.MoonIcon fill={theme === 'dark' ? 'currentColor' : 'none'}/>
      <UI.Text>
        {`${theme === 'light' ? 'Light' : 'Dark'} Mode`}
      </UI.Text>
    </UI.Toggler>
  );
};
