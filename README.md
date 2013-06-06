# Synopsis

CSS compressor for [James.js](https://github.com/leonidas/james.js). Uses [node-cssmin](https://github.com/jbleuzen/node-cssmin).

```javascript
var james  = require('james'),
    cssmin = require('james-jade');

james.task('jade', function() {
    
  james.list('src/**/*.css').forEach(function(file) {
    james.read(file)
      .transform(cssmin)
      .write(process.stdout);
  });
});

```

## API

`cssmin()`: Returns a new CSS compressor stream. Does not accept any options.
