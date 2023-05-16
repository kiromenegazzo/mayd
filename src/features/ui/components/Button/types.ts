import { ReactNode, HTMLAttributes } from 'react';

import { TIcon } from 'features/ui/components/Icon';

type THtmlType = 'button' | 'submit' | 'reset';

export interface IProps extends
  HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  htmlType?: THtmlType;
  Icon?: TIcon;
}
