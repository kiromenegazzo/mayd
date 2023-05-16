import { render, screen } from 'features/ui/utils/test';

import { Button } from '../index';

describe('Component: Button', () => {
  describe('Prop: children', () => {
    it('should render children', () => {
      const children = 'test';

      render(<Button>{children}</Button>);

      expect(screen.getByText(children)).toBeInTheDocument();
    });
  });

  describe('Prop: Icon', () => {
    it('should render icon', () => {
      const children = 'test';
      const iconTestId = 'my-icon';
      const Icon = () => <div data-testid={iconTestId}></div>;

      render(<Button Icon={Icon}>{children}</Button>);

      expect(screen.getByTestId(iconTestId)).toBeInTheDocument();
    });
  });

  describe('Prop: htmlType', () => {
    it('should render button with type button by default', () => {
      const children = 'test';

      render(<Button>{children}</Button>);

      expect(screen.getByRole('button')).toBeInTheDocument();
    });
  });
});
