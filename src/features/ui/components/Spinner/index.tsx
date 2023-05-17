import * as UI from './styles';
import { IProps } from './types';

export const Spinner = (props: IProps) => {
  const { isAbsolute = false, ...rest } = props;

  return (
    <UI.Spinner {...rest} $isAbsolute={isAbsolute} role="status"/>
  );
};
