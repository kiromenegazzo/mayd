import { ReactNode, ButtonHTMLAttributes } from 'react';

import { TIcon } from '@features/ui/components/Icon';

type THtmlType = 'button' | 'submit' | 'reset';

export interface IProps extends
  ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  htmlType?: THtmlType;
  Icon?: TIcon;
}
