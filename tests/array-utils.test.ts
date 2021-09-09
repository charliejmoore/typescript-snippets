import { flatten, getRandomElement, removeFromArray } from "../src/array-utils";

describe('test #flatten function', () => {

  it('should return the input list if the input list was already flat', () => {
    expect(flatten([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('should return a flattened list if the input list was not flat', () => {
    expect(flatten([1, [2, 3, [[4]]]])).toEqual([1, 2, 3, 4]);
  });
});
