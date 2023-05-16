import { atom } from 'jotai';

import { TTheme } from 'features/ui/assets/styles';

export const themeAtom = atom<TTheme>('light');
