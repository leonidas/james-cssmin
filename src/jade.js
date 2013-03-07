(function() {
  var jade;

  jade = require('jade');

  module.exports = function(files) {
    return files.map(function(file) {
      return {
        content: jade.compile(file.content, {
          client: false
        })(),
        name: file.name.replace(/.jade$/, '.html')
      };
    });
  };

}).call(this);
