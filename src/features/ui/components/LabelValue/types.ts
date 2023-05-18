import { ReactNode } from 'react';

import { TPaginationType } from 'features/ui';

export interface IProps {
  label: string;
  value: ReactNode;
  size?: TPaginationType;
}
