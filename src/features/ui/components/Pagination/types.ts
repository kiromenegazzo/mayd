export interface IProps {
  total: number;
  limit: number;
  page: number;
  onChange: (value: number) => void;
}
