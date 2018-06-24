'use strict';

// const logger = require('./logger');
// const fs = require('fs');

// const fileReader = module.exports = {};

// const data1 = `${__dirname}/./lib/assets/1.txt`;
// const data2 = `${__dirname}/./lib/assets/2.txt`;
// const data3 = `${__dirname}/./lib/assets/3.txt`;

// // this reads a single file path
// fileReader.readFile(data1);


const fs = require('fs');

const reader = module.exports = (paths, callback) => { // eslint-disable-line
  const filePath1 = paths[0];
  const filePath2 = paths[1];
  const filePath3 = paths[2];
  
  fs.readFile(filePath1, (err1, data1) => {
    if (err1) return callback(err1);
    return fs.readFile(filePath2, (err2, data2) => {
      if (err2) return callback(err2);
      return fs.readFile(filePath3, (err3, data3) => {
        if (err3) return callback(err3);
        callback(null, [data1.toString(), data2.toString(), data3.toString()]);
        return undefined;
      });
    });
  });
};
