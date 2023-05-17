import { render, screen, act } from 'features/core';

import { Image } from '../index';

jest.mock('react-intersection-observer', () => ({
  useInView: jest.fn(() => ({
    ref: () => {},
    inView: true,
  })),
}));

jest.mock('features/ui/hooks/useNativeLazyLoading', () => ({
  useNativeLazyLoading: jest.fn(() => true),
}));

describe('Component: Image', () => {
  it('should render placeholder when src is not provided or there is an error', () => {
    render(<Image alt="Test alt" src=""/>);

    const placeholderElement = screen.getByText('Test alt');

    expect(placeholderElement).toBeInTheDocument();
  });

  it('should render image and spinner when src is provided and there is no error', () => {
    render(<Image alt="Test alt" src="test.jpg" />);

    const imageElement = screen.getByAltText('Test alt');
    const spinnerElement = screen.getByRole('status');

    expect(imageElement).toBeInTheDocument();
    expect(spinnerElement).toBeInTheDocument();
  });

  describe('Prop: onLoad', () => {
    it('should call onLoad callback when the image loads successfully', () => {
      const onLoadMock = jest.fn();

      render(<Image alt="Test alt" src="test.jpg" onLoad={onLoadMock} />);

      const imageElement = screen.getByAltText('Test alt');

      act(() => {
        imageElement.dispatchEvent(new Event('load'));
      });

      expect(onLoadMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('Prop: onError', () => {
    it('should call onError callback when the image fails to load', () => {
      const onErrorMock = jest.fn();

      render(<Image alt="Test alt" src="test.jpg" onError={onErrorMock} />);

      const imageElement = screen.getByAltText('Test alt');

      act(() => {
        imageElement.dispatchEvent(new Event('error'));
      });

      expect(onErrorMock).toHaveBeenCalledTimes(1);
    });
  });
});
