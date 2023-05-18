import { useComponentVisible } from 'features/ui/hooks/useComponentVisible';

import * as UI from './styles';
import { IProps, IOption } from './types';

export const Select = (props: IProps) => {
  const { options, value, placeholder, onChange, className } = props;

  const { ref, isVisible, setIsVisible } = useComponentVisible();

  const handleChange = (option: IOption) => {
    if (onChange) {
      const event = { target: { value: value === option.value ? '' : option.value } };

      onChange(event);
    }

    setIsVisible(false);
  };

  return (
    <>
      <UI.Container className={className} ref={ref}>
        <UI.Input onClick={() => setIsVisible(prev => !prev)}>
          <UI.Placeholder>
            {value || placeholder}
          </UI.Placeholder>
          <UI.ArrowIcon $isVisible={isVisible}/>
        </UI.Input>
        {isVisible && (
          <UI.Dropdown>
            {options.map(item => <UI.Option key={item.value} onClick={() => handleChange(item)}>{item.label}</UI.Option>)}
          </UI.Dropdown>
        )}
      </UI.Container>
    </>
  );
};

export * from './types';
