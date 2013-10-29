module SpectacularRails
  class Engine < ::Rails::Engine
    isolate_namespace SpectacularRails

    initializer :assets, :group => :all do |app|
      app.config.assets.paths << Rails.root.join(SpectacularRails.spec_path, "javascripts").to_s
      app.config.assets.paths << Rails.root.join(SpectacularRails.spec_path, "stylesheets").to_s
    end

    config.after_initialize do |app|
      app.routes.prepend do
        mount SpectacularRails::Engine => SpectacularRails.mount_at
      end if SpectacularRails.mount
    end
  end
end
