'use strict';

const fs = require('fs');
const fileReader = require('../lib/reader');

const mockText1 = `${__dirname}/./mock-assets/1.txt`;
const mockText2 = `${__dirname}/./mock-assets/2.txt`;
const mockText3 = `${__dirname}/./mock-assets/3.txt`;

let mockData = [];

describe('tests to see if fileReader reads the files', () => {
  beforeAll(() => {
    mockData = [
      fs.readFile(mockText1, { encoding: 'utf-8' }),
      fs.readFile(mockText2, { encoding: 'utf-8' }),
      fs.readFile(mockText3, { encoding: 'utf-8' }),
    ];
  });

  it('should show that the data is the same data in our mock array', () => {
    fileReader.readFile(mockText1, (error, data1) => {
      expect(data1).toEqual(mockData[0]);
      expect(error).toBeNull();
    });
  });

  it('throws an error on bad path', () => {
    fileReader.readFile('bad path', (error) => {
      expect(error).toHaveProperty('errno');
      expect(error.code).toEqual('ENOENT');
    });
  });

  it('this will test multiple arrays', () => {
    fileReader.readMoreFiles([mockText1, mockText2, mockText3], (err, data) => {
      expect(data).toEqual(['MOCK 1', 'MOCK 2', 'MOCK 3']);
      expect(err).toBeNull();
    });
    fileReader.readMoreFiles(mockText2, (err, data2) => {
      expect(data2).toEqual(mockText2);
      expect(err).toBeNull();
    });
    fileReader.readMoreFiles(mockText3, (err, data3) => {
      expect(data3).toEqual(mockText3);
      expect(err).toBeNull();
    });
  });
});
