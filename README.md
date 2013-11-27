# SpectacularRails

Rails Engine that expose routes to run Spectacular tests in browsers through the assets pipeline.

## Installation

    gem install spectacular_rails

Then create a `spec.js` or `spec.js.coffee` manifest the `<SPEC_PATH>/javascripts` directory.

This manifest will allow you to load your tests in the runner:

```javascript
//= require_tree ./

```

## Configuration

The engine mount itself on `/spectacular` when loaded in a project.

Some configuration can be done in an initializer with:

```ruby
equire 'spectacular_rails'

SpectacularRails.setup do |config|
  config.mount_at = '/route/to/spectacular'

  config.spec_path = 'path/to/my/specs'
  config.fixture_path = 'path/to/my/fixtures'

  config.spec_options[:verbose] = true

end
```
