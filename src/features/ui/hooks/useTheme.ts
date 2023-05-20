import { useAtom } from 'jotai';

import { themeAtom } from '@features/ui/store';

export const useTheme = () => useAtom(themeAtom);
