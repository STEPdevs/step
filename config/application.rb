require File.expand_path('../boot', __FILE__)

require 'rails/all'

Bundler.require(:default, Rails.env)

module Step
  class Application < Rails::Application
    config.assets.precompile += ['jquery-ui.css','registration.js','jquery.handsontable.full.css','admin-cadidates.css','jquery.handsontable.full.js']
  end
end
