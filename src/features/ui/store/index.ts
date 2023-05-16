import { TTheme } from 'features/ui/assets/styles';
import { atom } from 'jotai';

export const themeAtom = atom<TTheme>('light');
