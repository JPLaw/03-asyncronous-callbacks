'use strict';

const fs = require('fs');
const logger = require('../lib/logger');

const fileReader = module.exports = {};

// this reads a single file path
fileReader.readFile = (paths, callback) => {
  return fs.readFile(paths, (error, data) => {
    if (error) return callback(error);
    logger.log(logger.INFO, data.toString());
    return undefined;
  });
};
  
fileReader.readMoreFiles = (files, callback) => {
  return fs.readFile(files[0], (error1, data1) => {
    if (error1) return callback(error1);
    return fs.readFile(files[1], (error2, data2) => {
      if (error2) return callback(error2);
      return fs.readFile(files[2], (error3, data3) => {
        if (error3) return callback(error3);
        return callback(null, [data1.toString(), data2.toString(), data3.toString()]);
      });
    });
  });
};
