import * as UI from './styles';
import { IProps } from './types';

export const NoData = (props: IProps) => {
  const { message = 'Data Not Found', className } = props;

  return (
    <UI.Container className={className}>
      <UI.Message>
        {message}
      </UI.Message>
    </UI.Container>
  );
};

