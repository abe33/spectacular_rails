#= require jade
#= require snap
#= require source-map
#= require_self
#= require spectacular
#= require templates

previous_on_load = window.onload

spectacular.templates = {}

window.onload = ->
  scripts = document.querySelectorAll 'script'
  a = Array::map.call scripts, (s) -> s.attributes.src?.value

  spectacular.options.paths = a.filter (s) -> s? and s.indexOf('spectacular') is -1

  do previous_on_load if previous_on_load?

