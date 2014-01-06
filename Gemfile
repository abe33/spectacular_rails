source "https://rubygems.org"

# Declare your gem's dependencies in spectacular_rails.gemspec.
# Bundler will treat runtime dependencies like base dependencies, and
# development dependencies will be added by default to the :development group.
gemspec

# Declare any dependencies that are still in development here instead of in
# your gemspec. These might include edge Rails or gems from your path or
# Git. Remember to move these dependencies to your gemspec before releasing
# your gem to rubygems.org.

# To use debugger
# gem 'debugger'

# used by the dummy application
gem 'rails', '>= 3.2.13'
gem 'json'
gem 'coffee-rails', ">= 3.2.1"
gem 'haml-rails'

# used by test rails apps
gem 'sqlite3'
gem 'sass-rails', ">= 3.2.1"
gem 'uglifier'
gem 'jquery-rails'
gem 'turn', :require => false, :group => :test

group :development, :test do
  gem "rspec-rails"
  gem "capybara"
  gem "aruba"
  gem "better_errors"
  gem "binding_of_caller"
end
