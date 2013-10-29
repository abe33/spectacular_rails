require 'spec_helper'

describe SpectacularRails do
  it "has configuration properties" do
    expect(SpectacularRails.mount).to be(true)
    expect(SpectacularRails.mount_at).to eql('/spectacular')
    expect(SpectacularRails.spec_path).to eql('spec')
    expect(SpectacularRails.fixture_path).to eql('spec/dummy/spec/javascripts/fixtures')
  end

  describe ".setup" do

    after do
      SpectacularRails.mount_at = '/spectacular'
    end

    it "yields self" do
      config = nil
      SpectacularRails.setup { |c| config = c }
      expect(config).to be(SpectacularRails)
    end

    it "allows changing configuration" do
      SpectacularRails.setup { |c| c.mount_at = '/spectacular_rails' }
      expect(SpectacularRails.mount_at).to eql('/spectacular_rails')
    end

  end
end
