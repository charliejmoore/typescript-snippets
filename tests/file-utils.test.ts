// auto-mock fs
jest.mock('fs');

import fs from 'fs';
import { mocked } from 'ts-jest/utils';
import { FileUtils } from '../src/file-utils';

describe('FileUtils', () => {
  describe('saveJsonToFile', () => {
    let data: any;
    const path: string = 'some/test/path';

    beforeEach(() => {
      // Clear any previous calls
      mocked(fs.writeFileSync).mockClear();

      data = {
        fruit: 'Banana',
        vegetable: 'Carrot'
      };
    });

    it('should call #fs.writeFileSync once with the correct args', () => {
      const json = JSON.parse(JSON.stringify(data, null, 4));
      FileUtils.saveJsonToFile(data, path);
      expect(mocked(fs.writeFileSync).mock.calls.length).toBe(1);
      expect(mocked(fs.writeFileSync)).toBeCalledWith(path, json);
    });

    it('should throw an error when #fs.writeFileSync returns an error', () => {
      mocked(fs.writeFileSync).mockImplementation(() => { throw new Error('an error'); });
      expect(() => FileUtils.saveJsonToFile(data, path)).toThrowError('an error');
    });
  });
});
