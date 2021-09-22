import { flatten, removeFromArray } from '../src/array-utils';

describe('test #removeFromArray function', () => {
  it('should not alter an array when the element is not part of the array', () => {
    const array = [1, 2, 3];
    expect(removeFromArray(4, array)).toEqual([1, 2, 3]);
  });

  it('should not alter an array when the element is not part of the array', () => {
    const array: any[] = [];
    expect(removeFromArray(4, array)).toEqual([]);
  });

  it('should remove an element from an array if it is present', () => {
    const array = [1, 2, 3];
    expect(removeFromArray(2, array)).toEqual([1, 3]);
  });

  it('should remove an element from an array if it is present', () => {
    const array = [1];
    expect(removeFromArray(1, array)).toEqual([]);
  });

  it('should remove an all occurances element from an array if it is present multiple times', () => {
    const array = [1, 2, 3, 3, 3, 3];
    expect(removeFromArray(3, array)).toEqual([1, 2]);
  });

  it('should remove a string from an array if it is present', () => {
    const array = ['abc', 'def', 'ghi'];
    expect(removeFromArray('def', array)).toEqual(['abc', 'ghi']);
  });
});

describe('test #flatten function', () => {
  it('should return the the inputted array when the array is already flat', () => {
    const array = [1, 2, 3];
    expect(flatten(array)).toEqual([1, 2, 3]);
  });

  it('should return the the inputted array when the array is already flat', () => {
    const array = [1];
    expect(flatten(array)).toEqual([1]);
  });

  it('should return the the inputted array when the array is already flat', () => {
    const array: any[] = [];
    expect(flatten(array)).toEqual([]);
  });

  it('should return the the inputted array when the array is not flat', () => {
    const array = [[1]];
    expect(flatten(array)).toEqual([1]);
  });

  it('should return the the inputted array when the array is not flat', () => {
    const array = [[], [], [[[]]]];
    expect(flatten(array)).toEqual([]);
  });

  it('should return the the inputted array when the array is not flat', () => {
    const array = [[2, [3]], [4], [[3, [7]]]];
    expect(flatten(array)).toEqual([2, 3, 4, 3, 7]);
  });
});
