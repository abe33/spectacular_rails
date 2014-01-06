
module SpectacularRails
  # Determine whether or not to mount the SpectacularRails engine implicitly. True/False
  mattr_accessor :mount
  @@mount = true

  # Specify location at which to mount the engine, default to '/spectacular'
  mattr_accessor :mount_at
  @@mount_at = '/spectacular'

  # Specify the path for specs, defaults to 'spec'
  mattr_accessor :spec_path
  @@spec_path = 'spec'

  #Specify the path for fixutures, defaults to 'spec/javascripts/fixtures'
  mattr_accessor :fixture_path
  @@fixture_path = 'spec/javascripts/fixtures'

  mattr_accessor :spec_options
  @@spec_options = {
    coffee: true,
    verbose: false,
    trace: true,
    longTrace: false,
    showSource: true,
    format: 'documentation',
    random: true,
    seed: nil,
    fixturesRoot: 'spectacular/fixtures'
  }

  # Default way to setup SpectacularRails. Run rails generate spectacular_rails:install to create
  # a fresh initializer with all configuration values.
  def self.setup
    yield self
  end

  class Engine < ::Rails::Engine
    isolate_namespace SpectacularRails

    initializer :assets, :group => :all do |app|
      app.config.assets.paths << Rails.root.join(SpectacularRails.spec_path, "javascripts").to_s
      app.config.assets.paths << Rails.root.join(SpectacularRails.spec_path, "stylesheets").to_s
      app.config.assets.paths << Rails.root.join(SpectacularRails.spec_path,"vendor", "assets", "font")
      app.config.assets.paths << Rails.root.join(SpectacularRails.spec_path,"vendor", "assets", "javascripts")
      app.config.assets.paths << Rails.root.join(SpectacularRails.spec_path,"vendor", "assets", "stylesheets")
    end

    config.after_initialize do |app|
      app.routes.prepend do
        mount SpectacularRails::Engine => SpectacularRails.mount_at
      end if SpectacularRails.mount
    end
  end
end
