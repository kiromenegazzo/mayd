import { ReactNode, MouseEvent } from 'react';

import { TIcon } from 'features/ui/components/Icon';

type THtmlType = 'button' | 'submit' | 'reset';

export interface IProps {
  children: ReactNode;
  htmlType?: THtmlType;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  Icon?: TIcon;
}
