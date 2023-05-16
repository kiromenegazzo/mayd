import { useTheme } from 'styled-components';

export const App = () => {
  const theme = useTheme();

  console.log('Current theme: ', theme);

  return (
    <>
      Hello world!
    </>
  );
};
