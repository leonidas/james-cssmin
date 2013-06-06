var cssmin = require('cssmin'),
    james = require('james');

module.exports = function() {
  return james.createStream(function(file, callback) {
    callback(cssmin(file));
  });
};
