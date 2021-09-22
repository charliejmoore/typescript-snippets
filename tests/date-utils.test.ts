import { DateUtils } from '../src/date-utils';

describe('DateUtiles', () => {
  describe('#getBeginningOfWeek', () => {
    it('should return a Date that is a Monday (represented by the number 1)', ()=> {
      expect(DateUtils.getBeginningOfWeek().getDay()).toEqual(1);
    });
  });

  describe('#getDatesForThisWeek', () => {
    it('should call #getBeginningOfWeek once', ()=> {
      const spy = jest.spyOn(DateUtils, 'getBeginningOfWeek');
      DateUtils.getDatesForThisWeek();
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should return a list of strings, one for each day of the week', ()=> {
      expect(DateUtils.getDatesForThisWeek().length).toEqual(7);
    });
  });
});
