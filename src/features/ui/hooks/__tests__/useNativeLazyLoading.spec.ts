import { renderHook } from 'features/ui/utils/test';

import { useNativeLazyLoading } from '../useNativeLazyLoading';

describe('Hook: useNativeLazyLoading', () => {
  beforeEach(() => {
    delete (global as any).HTMLImageElement.prototype.loading;
  });

  it('should return true if native lazy loading is supported', async () => {
    (global as any).HTMLImageElement.prototype.loading = true;

    const { result } = renderHook(() => useNativeLazyLoading());

    expect(result.current).toBe(true);
  });
});



