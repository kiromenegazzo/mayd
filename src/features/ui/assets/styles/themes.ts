// Dark Gray (Light Mode Input): hsl(0, 0%, 52%)

export type TColors = 'background' | 'element' | 'text';
export type TTheme = 'light' | 'dark';
export type TThemePalette = Record<TColors, string>;

export const darkTheme: TThemePalette = {
  background: 'hsl(207, 26%, 17%)',
  element: 'hsl(209, 23%, 22%)',
  text: 'hsl(0, 0%, 100%)',
};

export const lightTheme: TThemePalette = {
  background: 'hsl(0, 0%, 98%)',
  element: 'hsl(0, 0%, 100%)',
  text: 'hsl(200, 15%, 8%)',
};
