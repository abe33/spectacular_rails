$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "spectacular_rails/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "spectacular_rails"
  s.version     = SpectacularRails::VERSION
  s.authors     = ["Cédric Néhémie"]
  s.email       = ["cedric.nehemie@gmail.com"]
  s.homepage    = ""
  s.summary     = "SpectacularRails."
  s.description = "SpectacularRails."

  s.files = Dir["{app,config,db,lib,vendor}/**/*"] + ["MIT-LICENSE", "Rakefile", "README.rdoc"]
  s.test_files = Dir["test/**/*"]

  s.add_dependency "rails", ">= 3.2.13"
end
