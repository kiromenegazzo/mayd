import * as UI from './styles';
import { IProps } from './types';

export const Button = (props: IProps) => {
  const { htmlType = 'button', children, onClick, Icon } = props;

  return (
    <UI.Button type={htmlType} onClick={onClick}>
      {Icon && <UI.Icon as={Icon}/>}
      {children}
    </UI.Button>
  );
};
