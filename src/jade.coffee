jade = require 'jade'

module.exports = (files) ->
  files.map (file) ->
    content: jade.compile(file.content, client: false)()
    name: file.name.replace /.jade$/, '.html'
