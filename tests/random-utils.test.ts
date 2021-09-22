import { getRandomInRange } from '../src/random-utils';

describe('test #getRandomInRange function', () => {
  it('should return a number that is less than or equal to `max`', () => {
    const max: number = 10;
    expect(getRandomInRange(max)).toBeLessThanOrEqual(max);
  });
});
