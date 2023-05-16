import { themeAtom } from 'features/ui/store';
import { useAtom } from 'jotai';

export const useTheme = () => useAtom(themeAtom);
