import { renderHook, act } from '@core/utils/test';

import { useComponentVisible } from '../useComponentVisible';

describe('Hook: useComponentVisible', () => {
  describe('Prop: initialVisible', () => {
    it('should initialize with default value', () => {
      const { result } = renderHook(() => useComponentVisible());

      expect(result.current.isVisible).toBe(false);
    });

    it('should initialize with the correct initialVisible value', () => {
      const { result } = renderHook(() => useComponentVisible({ initialVisible: true }));

      expect(result.current.isVisible).toBe(true);
    });
  });

  describe('Prop: outsideCallback', () => {
    it('should call the outsideCallback function when clicking outside the component', () => {
      const outsideCallback = jest.fn();
      const { result } = renderHook(() =>
        useComponentVisible({ initialVisible: true, outsideCallback }),
      );

      act(() => {
        const refElement = document.createElement('div');

        document.body.appendChild(refElement);
        // @ts-ignore
        result.current.ref.current = refElement;
        document.dispatchEvent(new MouseEvent('click'));
      });

      expect(outsideCallback).toHaveBeenCalledTimes(1);
    });

    it('should not call the outsideCallback function when clicking inside the component', () => {
      const outsideCallback = jest.fn();
      const { result } = renderHook(() =>
        useComponentVisible({ initialVisible: true, outsideCallback }),
      );

      act(() => {
        const outsideElement = document.createElement('div');

        // @ts-ignore
        result.current.ref.current = outsideElement;
        document.body.appendChild(outsideElement);
        outsideElement.dispatchEvent(new MouseEvent('click'));
      });

      expect(outsideCallback).not.toHaveBeenCalled();
    });

    it('should toggle isVisible state when clicking outside the component', () => {
      const { result } = renderHook(() => useComponentVisible({ initialVisible: true }));

      act(() => {
        const refElement = document.createElement('div');

        document.body.appendChild(refElement);
        // @ts-ignore
        result.current.ref.current = refElement;

        const outsideElement = document.createElement('div');

        document.body.appendChild(outsideElement);
        outsideElement.dispatchEvent(new MouseEvent('click'));
      });

      expect(result.current.isVisible).toBe(false);
    });
  });
});
