require File.expand_path('../boot', __FILE__)

require 'rails/all'

Bundler.require(*Rails.groups)

require "spectacular_rails"

p SpectacularRails

module Dummy
  class Application < Rails::Application
  end
end

