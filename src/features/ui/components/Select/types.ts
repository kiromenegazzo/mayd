export interface IOption {
  label: string;
  value: string | number;
}

interface ITarget<T> {
  value: T;
}

export interface IEvent {
  target: ITarget<IOption['value']>
}

export interface IProps {
  placeholder?: string;
  value?: string;
  onChange?: (event: IEvent) => void;
  options: IOption[];
  className?: string;
}

export interface IArrowDownStyleProps {
  $isVisible: boolean;
}
