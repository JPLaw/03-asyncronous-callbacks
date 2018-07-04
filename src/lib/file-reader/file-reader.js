'use strict';

const fs = require('fs');
const logger = require('../logger');

const fileReader = module.exports = {};

fileReader.readFile = (filePath, callback) => {
  return fs.readFile(filePath, (error, data) => {
    if (error) return callback(error);
    logger.log(logger.INFO, data.toString());
    return undefined;
  });
};


fileReader.readThreeFiles = (files, callback) => {
  return fs.readFile(files[0], (err1, data1) => {
    if (err1) return callback(err1);
    return fs.readFile(files[1], (err2, data2) => {
      if (err2) return callback(err2);
      return fs.readFile(files[2], (err3, data3) => {
        if (err3) return callback(err3);
        return callback(null, [data1.toString(), data2.toString(), data3.toString()]);
      });
    });
  });
};
