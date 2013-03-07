james = require 'james'
jade = require 'james-jade-static'

module.exports = tasks = {}

tasks.jade = ->
  james.files('*.jade').map(jade).onValue james.write