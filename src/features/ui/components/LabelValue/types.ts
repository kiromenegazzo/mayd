import { ReactNode } from 'react';

import { TTypographyType } from '@features/ui/components/Typography';

export interface IProps {
  label: string;
  value: ReactNode;
  size?: TTypographyType;
  className?: string;
}
