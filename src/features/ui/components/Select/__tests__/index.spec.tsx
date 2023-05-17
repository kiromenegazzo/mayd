import { render, fireEvent } from 'features/core';

import { Select } from '../index';

describe('Component: Select', () => {
  it('should toggle dropdown visibility when clicking on the input', () => {
    const options = [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ];
    const placeholder = 'Select an option';
    const { getByText, queryByText } = render(<Select options={options} placeholder={placeholder}/>);

    const inputElement = getByText(placeholder);

    fireEvent.click(inputElement);
    expect(queryByText('Option 1')).toBeInTheDocument(); // Dropdown is visible

    fireEvent.click(inputElement);
    expect(queryByText('Option 1')).not.toBeInTheDocument(); // Dropdown is hidden
  });

  describe('Prop: onChange', () => {
    it('should call the onChange function when selecting an option', () => {
      const options = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
      ];
      const placeholder = 'Select an option';
      const onChange = jest.fn();
      const { getByText } = render(<Select options={options} placeholder={placeholder} onChange={onChange} />);

      const inputElement = getByText(placeholder);

      fireEvent.click(inputElement);

      const optionElement = getByText('Option 2');

      fireEvent.click(optionElement);

      expect(onChange).toHaveBeenCalledWith({ target: { value: 'option2' } });
    });
  });
});
