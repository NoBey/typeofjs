'use strict';
var type = function(obj) {
  var map = {
      '[object Array]': 'array',
      '[object Object]': 'object',
      '[object String]': 'string',
      '[object Number]': 'number',
      '[object Boolean]': 'boolean',
      '[object Null]': 'null',
      '[object Function]': 'function',
      '[object RegExp]': 'regexp',
      '[object Date]': 'date',
      '[object Undefined]': 'undefined'
    };
    var t = Object.prototype.toString.call(obj);
    return map[t];
};

module.exports = type;
