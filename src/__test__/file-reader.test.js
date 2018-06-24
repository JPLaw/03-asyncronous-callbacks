'use strict';

const fs = require('fs');
const fileReader = require('../lib/file-reader/file-reader');

const mockText1 = `${__dirname}/./mock-assets/1.txt`;
const mockText2 = `${__dirname}/./mock-assets/2.txt`;
const mockText3 = `${__dirname}/./mock-assets/3.txt`;

let mockData = [];

describe('tests to see if fileReader reads the files', () => {
  beforeAll(() => { 
    mockData = [
      fs.readFileSync(mockText1, { encoding: 'utf-8' }),
      fs.readFileSync(mockText2, { encoding: 'utf-8' }),
      fs.readFileSync(mockText3, { encoding: 'utf-8' }),
    ];
  });

  it('should show that the data from readThreeFiles equals the data in mockData', () => {
    fileReader.readThreeFiles(mockText1, mockText2, mockText3, (err, data1, data2, data3) => {
      expect(data1).toEqual(mockData[0]);
      expect(err).toBeNull();
    });
  });

  it('should return an error for a bad file path on the first item', () => {
    fileReader.readThreeFiles('bad path', mockText2, mockText3, (err, data1, data2, data3) => {
      expect(err).toHaveProperty('errno');
      expect(err.code).toEqual('ENOENT');
    });
  });

  it('should test multiple arrays going into readMoreFiles', () => {
    fileReader.readMoreFiles([mockText1, mockText2, mockText3], (err, data) => {
      expect(data).toEqual(['MOCK 1', 'MOCK 2', 'MOCK 3']);
      expect(err).toBeNull();
    });
  });
});
