import { MoonOutlineIcon } from 'features/ui/components/Icon';
import { useTheme } from 'features/ui/hooks/useTheme';

export const ThemeToggler = () => {
  const [theme, setTheme] = useTheme();

  return (
    <>
      {`${theme === 'light' ? 'light' : 'dark'} mode`}
      <MoonOutlineIcon color={theme === 'light' ? 'red' : 'blue'} onClick={() => setTheme(prev => prev === 'light' ? 'dark' : 'light')}/>
    </>
  );
};
