import { arrayObjectsToObject } from '../src/object-utils';

describe('test arrayObjectsToObject function', () => {

  let testObjArray: any[];
  const keyId: string = "id";

  beforeEach(() => {
    testObjArray = [
      { id: 1, name: "Apples" },
      { id: 2, name: "Lettuce" },
      { id: 3, name: "Pasta" }
    ];
  });

  it('should return an array of objects as an object', () => {
    const expectedResult =  {
      "1": { id: 1, name: "Apples" },
      "2": { id: 2, name: "Lettuce" },
      "3": { id: 3, name: "Pasta" }
    }
    expect(arrayObjectsToObject(testObjArray, keyId)).toEqual(expectedResult);
  });

});
