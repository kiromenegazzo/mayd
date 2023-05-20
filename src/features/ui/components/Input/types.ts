import { ChangeEvent, HTMLAttributes } from 'react';

import { TIcon } from '@features/ui/components/Icon';

export type TType = 'text' | 'number' | 'tel' | 'search';

export interface IProps extends
  HTMLAttributes<HTMLInputElement> {
  htmlType?: TType;
  Icon?: TIcon;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
