// Dark Gray (Light Mode Input): hsl(0, 0%, 52%)

type TColors = 'background' | 'element' | 'text';

type TTheme = Record<TColors, string>;

export const darkTheme: TTheme = {
  background: 'hsl(207, 26%, 17%)',
  element: 'hsl(209, 23%, 22%)',
  text: 'hsl(0, 0%, 100%)',
};

export const lightTheme: TTheme = {
  background: 'hsl(0, 0%, 98%)',
  element: 'hsl(0, 0%, 100%)',
  text: 'hsl(200, 15%, 8%)',
};
