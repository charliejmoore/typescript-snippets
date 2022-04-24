import { RandomUtils } from '../src/random-utils';

describe('RandomUtils', () => {
  describe('test #getRandomInRange function', () => {
    it('should return a number that is less than or equal to `max`', () => {
      const min: number = 0;
      const max: number = 10;
      const result: number = RandomUtils.getRandomInRange(min, max);
      expect(result).toBeLessThanOrEqual(max);
      expect(result).toBeGreaterThan(min);
    });
  });
});
