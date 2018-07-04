[![Build Status](https://travis-ci.org/JPLaw/03-asyncronous-callbacks.svg?branch=master)](https://travis-ci.org/JPLaw/03-asyncronous-callbacks)

03: Asynchronous Callbacks
===

## Reader Module

### Reader Function
description: accepts an array of file paths, and uses fs.readFile to return the text from those paths.
function signature: (dataArr, callback)
arity: 2
argument data type:
dataArr: an array of up to 3 absolute file paths
callback: a function with the signatire (err, data), where the original file path array maps to the returned data array.
will throw an error if a bad path is provided
