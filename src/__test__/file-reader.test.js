'use strict';

const fs = require('fs');
const fileReader = require('./lib/reader/');

describe('testing to see if I am connected to TravisCI', () => {
  test('should equal true', () => {
    expect(true).toEqual(true);
  });
});
  
const mockData1 = `${__dirname}/./mock-assets/mock-data1.txt`;
const mockData2 = `${__dirname}/./mock-assets/mock-data2.txt`;
const mockData3 = `${__dirname}/./mock-assets/mock-data3.txt`;

let mockData = [];

describe('testing fileReader module that reads given files', () => {
  beforeAll(() => {
    mockData = [
      fs.readFileSync(mockData1, { encoding: 'utf-8' }),
      fs.readFileSync(mockData2, { encoding: 'utf-8' }),
      fs.readFileSync(mockData3, { encoding: 'utf-8' }), 
    ];
  });

  it('should show that the data in our readAllFiles equals the mockData array', () => {
    fileReader.readThreeFiles(mockData1, mockData2, mockData3, (err, data1, data2, data3) => {
      expect(data1).toEqual(mockData1[0]);
      expect(err).toBeNull();
      expect(data2).toEqual(mockData2[1]);
      expect(err).toBeNull();
      expect(data3).toEqual(mockData3[2]);
      expect(err).toBeNull();
    });
  });

  it('should return an error for bad file path on first item', () => {
    fileReader.readThreeFiles('bad path', mockData2, mockData3, (err, data1, data2, data3) => {
      expect(err).toHaveProperty('errno');
      expect(err.code).toEqual('ENOENT');
    });
  });
});

//------------------------------------------------------------------------------
// 'use strict';

// const fs = require('fs');
// const fileReader = require('../lib/file-reader/file-reader');

// const mockText1 = `${__dirname}/./mock-assets/1.txt`;
// const mockText2 = `${__dirname}/./mock-assets/2.txt`;
// const mockText3 = `${__dirname}/./mock-assets/3.txt`;

// let mockData = [];

// describe('tests to see if fileReader reads the files', () => {
//   beforeAll(() => { 
//     mockData = [
//       fs.readFileSync(mockText1, { encoding: 'utf-8' }),
//       fs.readFileSync(mockText2, { encoding: 'utf-8' }),
//       fs.readFileSync(mockText3, { encoding: 'utf-8' }),
//     ];
//   });

//   it('should show that the data from readThreeFiles equals the data in mockData', () => {
//     fileReader.readThreeFiles(mockText1, mockText2, mockText3, (err, data1, data2, data3) => {
//       expect(data1).toEqual(mockData[0]);
//       expect(err).toBeNull();
//     });
//   });

//   it('should return an error for a bad file path on the first item', () => {
//     fileReader.readThreeFiles('bad path', mockText2, mockText3, (err, data1, data2, data3) => {
//       expect(err).toHaveProperty('errno');
//       expect(err.code).toEqual('ENOENT');
//     });
//   });

//   it('should test multiple arrays going into readMoreFiles', () => {
//     fileReader.readMoreFiles([mockText1, mockText2, mockText3], (err, data) => {
//       expect(data).toEqual(['MOCK 1', 'MOCK 2', 'MOCK 3']);
//       expect(err).toBeNull();
//     });
//     fileReader.readMoreFiles(mockText2, (err, data2) => {
//       expect(data2).toEqual(mockText2);
//       expect(err).toBeNull();
//     });
//     fileReader.readMoreFiles(mockText3, (err, data3) => {
//       expect(data3).toEqual(mockText3);
//       expect(err).toBeNull();
//     });
//   });
// });
