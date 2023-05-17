import { render, screen } from 'features/core';

import { Input } from '../index';

describe('Component: Input', () => {
  it('should focus on container click', () => {
    render(<Input />);

    const input = screen.getByRole('textbox');

    (input.parentNode as HTMLDivElement).click();

    expect(input).toHaveFocus();
  });

  describe('Prop: Icon', () => {
    it('should render icon', () => {
      const iconTestId = 'my-icon';
      const Icon = () => <div data-testid={iconTestId}></div>;

      render(<Input Icon={Icon}/>);

      expect(screen.getByTestId(iconTestId)).toBeInTheDocument();
    });
  });
});
