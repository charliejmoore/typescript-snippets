import { RandomUtils } from '../src/random-utils';

describe('RandomUtils', () => {
  describe('test #getRandomInRange function', () => {
    it('should return a number that is less than or equal to `max`', () => {
      const max: number = 10;
      expect(RandomUtils.getRandomInRange(max)).toBeLessThanOrEqual(max);
    });
  });
});
