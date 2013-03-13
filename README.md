# Synopsis

Jade to HTML transformer for [James.js](https://github.com/leonidas/james.js).

```javascript
var james = require('james'),
    jade  = require('james-jade');

james.task('jade', function() {
  james.list('src/**/*.jade').forEach(function(file) {
    james.read(file)
      .transform(jade({filename: file}))
      .write(process.stdout);
  });
});

```
