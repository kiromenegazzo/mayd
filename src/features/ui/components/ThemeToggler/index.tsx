import { useTheme } from 'features/ui/hooks/useTheme';

import * as UI from './styles';

export const ThemeToggler = () => {
  const [theme, setTheme] = useTheme();

  const handleClick = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  return (
    <UI.Toggler onClick={handleClick}>
      <UI.MoonIcon fill={theme === 'dark' ? 'currentColor' : 'none'}/>
      {`${theme === 'light' ? 'light' : 'dark'} mode`}
    </UI.Toggler>
  );
};
