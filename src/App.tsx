import { useTheme } from 'features/ui';

export const App = () => {
  const [theme, setTheme] = useTheme();

  console.log('Current theme: ', theme);

  return (
    <>
      Hello world!
      <button onClick={() => setTheme(prev => prev === 'light' ? 'dark' : 'light')}>{theme}</button>
    </>
  );
};
