'use strict';

const fs = require('fs');

fs.readFile(`${__dirname}/assets/one.html`, (err, data) => {
  if(err) console.error(err);
  