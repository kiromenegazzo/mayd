import * as UI from './styles';
import { IProps } from './types';

export const Button = (props: IProps) => {
  const { htmlType = 'button', children, Icon, ...rest } = props;

  return (
    <UI.Button {...rest} type={htmlType}>
      <>
        {Icon && <UI.Icon as={Icon}/>}
        {children}
      </>
    </UI.Button>
  );
};
