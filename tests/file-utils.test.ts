// auto-mock fs
jest.mock('fs');

import fs from 'fs';
import { mocked } from 'ts-jest/utils';
import { saveJsonToFile } from '../src/file-utils';

describe('saveJsonToFile', () => {
  let data: any;
  const path: string = 'some/test/path'
  beforeEach(() => {
    // clear any previous calls
    mocked(fs.writeFileSync).mockClear();
    data = {
      fruit: "Banana",
      vegetable: "Carrot"
    };
  });

  it('should call #fs.writeFileSync once with the correct args', () => {
    const json = JSON.parse(JSON.stringify(data, null, 4));
    saveJsonToFile(data, path);
    expect(mocked(fs.writeFileSync).mock.calls.length).toBe(1);
    expect(mocked(fs.writeFileSync)).toBeCalledWith(path, json)
  })

});
