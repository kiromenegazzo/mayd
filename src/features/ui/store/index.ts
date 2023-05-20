import { atom } from 'jotai';

import { TTheme } from '@features/ui/assets/styles';

export const themeAtom = atom<TTheme>('light');

themeAtom.onMount = (setAtom) => {
  const value = localStorage.getItem('theme') || 'light';

  setAtom(value as TTheme);
};
