import { useTheme } from 'features/ui/hooks/useTheme';

import * as UI from './styles';

export const ThemeToggler = () => {
  const [theme, setTheme] = useTheme();

  const handleClick = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  return (
    <UI.Toggler onClick={handleClick}>
      <UI.MoonIcon fill={theme === 'dark' ? 'currentColor' : 'none'}/>
      <UI.Text>
        {`${theme === 'light' ? 'Light' : 'Dark'} Mode`}
      </UI.Text>
    </UI.Toggler>
  );
};
