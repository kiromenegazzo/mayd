import { renderHook } from '@core/utils/test';

import { useLocalStorage } from '../useLocalStorage';

describe('Hook: useLocalStorage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should set and get the value correctly', () => {
    const key = 'testKey';
    const initialValue = 'initialValue';

    const { result, rerender } = renderHook(() => useLocalStorage(key));

    expect(result.current.value).toBeNull();

    result.current.onSet(initialValue);

    rerender();

    expect(result.current.value).toBe(initialValue);
  });

  it('should remove the value correctly', () => {
    const key = 'testKey';
    const initialValue = 'initialValue';

    const { result, rerender } = renderHook(() => useLocalStorage(key));

    result.current.onSet(initialValue);

    rerender();

    expect(result.current.value).toBe(initialValue);

    result.current.onRemove();

    rerender();

    expect(result.current.value).toBeNull();
  });

  it('should clear all values correctly', () => {
    const key1 = 'testKey1';
    const value1 = 'value1';

    const { result, rerender } = renderHook(() => useLocalStorage(key1));

    result.current.onSet(value1);

    rerender();

    expect(result.current.value).toBe(value1);

    result.current.onClear();

    rerender();

    expect(result.current.value).toBeNull();
  });
});
