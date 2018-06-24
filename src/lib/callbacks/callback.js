'use strict';

const myCallback = (data) => {
  console.log('2: Recieved', data);
};
  
const useCallback = (callback) => {
  const text = 'TEXT';
  console.log('1: Calling the callback');
  callback(text);
  console.log('3: After the callback');
};

useCallback(myCallback);
  
const errorFirstCallback = (err, data) => {
  if (err) {
    return console.log('2: ERROR: ', err);
  }
  return console.log('2: SUCCESS: Received: ', data);
};
  
const useErrorFirstCallback = (text, callback) => {
  try {
    if (!text || typeof text !== 'string') {
      throw new TypeError(`${text} is not a string`);
    }
    console.log('1: Calling the error first callback with successful text input');
    callback(undefined, text);
    console.log('3: SUCCESS: After the error first callback with successful text input');
  } catch (err) {
    console.log('1: Calling the error first callback with ERROR');
    callback(err, null);
    console.log('3: ERROR: after the error first callback with bad input');
  }
};
  
useErrorFirstCallback('howdy', errorFirstCallback);
