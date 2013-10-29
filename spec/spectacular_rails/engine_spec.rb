require "spec_helper"

describe SpectacularRails::Engine do

  it "is a class" do
    SpectacularRails::Engine.should be_a(Class)
  end

  it "has been isolated with a name" do
    expect(SpectacularRails::Engine.isolated?).to be(true)
    expect(SpectacularRails::Engine.railtie_name).to eql("spectacular_rails")
  end

  it "adds asset paths from configuration" do
    expect(Rails.application.config.assets.paths).to include(Rails.root.join("spec/javascripts").to_s)
    expect(Rails.application.config.assets.paths).to include(Rails.root.join("spec/stylesheets").to_s)
  end

end
