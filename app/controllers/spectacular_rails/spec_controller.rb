module SpectacularRails
  class SpecController < SpectacularRails::ApplicationController

    def index
      @spec_options = SpectacularRails.spec_options
      @specsuite = params[:suite].try(:concat, ".spec") || "spec"
      @asset_options = %w(true false).include?(params[:debug]) ? { debug: params[:debug] == 'true' } : {}
    end

    def fixtures
      format = params[:format]

      p format

      if %w(txt dom).include? format
        path = File.new("#{Rails.root}/#{SpectacularRails.fixture_path}/#{params[:filename]}.#{format}").read
        render text: path
      else
        render "#{SpectacularRails.fixture_path}/#{params[:filename]}", layout: false
      end
    end
  end
end
