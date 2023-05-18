import { formatBySeparator } from '../number'; // Replace with the actual file name containing the function

describe('Util: number', () => {
  describe('Util: formatBySeparator', () => {
    it('formats a number with default comma separator', () => {
      const result = formatBySeparator(1000);

      expect(result).toBe('1,000');
    });

    it('formats a number with a custom separator', () => {
      const result = formatBySeparator(1000000, '-');

      expect(result).toBe('1-000-000');
    });
  });
});
