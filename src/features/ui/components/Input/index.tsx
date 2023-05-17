import { useRef, MutableRefObject } from 'react';

import * as UI from './styles';
import { IProps } from './types';

export const Input = (props: IProps) => {
  const { htmlType = 'text', Icon, className, ...rest } = props;

  const ref = useRef() as MutableRefObject<HTMLInputElement>;

  const handleClick = () => {
    if (ref.current) {
      ref.current.focus();
    }
  };

  return (
    <UI.Container className={className} onClick={handleClick}>
      {Icon && <UI.Icon as={Icon}/>}
      <UI.Input {...rest} ref={ref} type={htmlType}/>
    </UI.Container>
  );
};
