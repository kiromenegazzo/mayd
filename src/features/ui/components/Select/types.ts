export interface IOption<T = string | number> {
  label: string;
  value: T;
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
