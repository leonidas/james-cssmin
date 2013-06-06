var assert = require('assert'),
    stream = require('readable-stream'),
    cssmin = require('../index.js');

describe('james-jade-static', function() {

  it('should return a CSS compressor stream', function(done){
    var src  = new stream.PassThrough(),
        dest = new stream.PassThrough();

    src.pipe(cssmin()).pipe(dest);
    src.write('html {\nbackground-color: red;\n}');
    src.end();

    dest.on('finish', function() {
      assert.equal(dest.read().toString(), 'html{background-color:red}');
      done();
    });
  });
});
