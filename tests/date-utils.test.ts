import { getBeginningOfWeek } from "../src/date-utils";

describe('#getBeginningOfWeek', () => {
  it('should return a Date that is a Monday (represented by the number 1)', ()=> {
    expect(getBeginningOfWeek().getDay()).toEqual(1);
  });
});
