'use strict';

const fs = require('fs');
const reader = require('./../lib/reader');

const mockText1 = `${__dirname}/./mock-assets/1.txt`;
const mockText2 = `${__dirname}/./mock-assets/2.txt`;
const mockText3 = `${__dirname}/./mock-assets/3.txt`;

describe('#READER: file reader module that reads exactly three files', () => {
  let mockData;
  beforeAll(() => {
    mockData = [
      fs.readFile(mockText1, { encoding: 'utf-8' }),
      fs.readFile(mockText2, { encoding: 'utf-8' }),
      fs.readFile(mockText3, { encoding: 'utf-8' }),
    ];
  });

  it('returns the mock data in the correct order', () => {
    const testPaths = [mockText1, mockText2, mockText3];
    reader(testPaths, (err, data) => {
      expect(data[0]).toEqual(mockData[0]);
      expect(data[1]).toEqual(mockData[1]);
      expect(data[2]).toEqual(mockData[2]);
      expect(err).toBeNull();
    });
  });

  it('throws an error on bad path at position 1', () => {
    const testPaths = ['bad path', mockText2, mockText3];
    reader(testPaths, (err) => {
      expect(err).toHaveProperty('errno');
      expect(err.code).toEqual('ENOENT');
    });
  });

  it('throws an error on bad path at position 2', () => {
    const testPaths = [mockText1, 'bad path', mockText3];
    reader(testPaths, (err) => {
      expect(err).toHaveProperty('errno');
      expect(err.code).toEqual('ENOENT');
    });
  });

  it('throws an error on bad path at position 3', () => {
    const testPaths = [mockText1, mockText2, 'bad path'];
    reader(testPaths, (err) => {
      expect(err).toHaveProperty('errno');
      expect(err.code).toEqual('ENOENT');
    });
  });
});
