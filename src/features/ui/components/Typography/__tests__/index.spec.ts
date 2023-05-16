import { getSize, getWeight } from '../styles';

describe('Component: Typography', () => {
  describe('getSize', () => {
    it('should return default value', () => {
      expect(getSize()).toBe(14);
    });

    it('should return value when p1 passed', () => {
      expect(getSize('p1')).toBe(24);
    });

    it('should return value when p2 passed', () => {
      expect(getSize('p2')).toBe(16);
    });

    it('should return value when p3 passed', () => {
      expect(getSize('p3')).toBe(14);
    });
  });

  describe('getWeight', () => {
    it('should return default value', () => {
      expect(getWeight()).toBe(300);
    });

    describe('should return extraBold', () => {
      it('when p1 passed', () => {
        expect(getWeight('p1')).toBe(800);
      });

      it('when extraBold passed', () => {
        expect(getWeight('p3', 'extraBold')).toBe(800);
      });
    });

    describe('should return semiBold', () => {
      it('when p2 passed', () => {
        expect(getWeight('p2')).toBe(600);
      });

      it('when semiBold passed', () => {
        expect(getWeight('p3', 'semiBold')).toBe(600);
      });
    });

    describe('should return light', () => {
      it('when p3 passed', () => {
        expect(getWeight('p3')).toBe(300);
      });

      it('when light passed', () => {
        expect(getWeight('p1', 'light')).toBe(300);
      });
    });
  });
});
