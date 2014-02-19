require File.expand_path('../boot', __FILE__)

require 'rails/all'

Bundler.require(:default, Rails.env)

module Step
  class Application < Rails::Application
  	config.assets.initialize_on_precompile = false

    config.i18n.enforce_available_locales = true
    config.active_record.whitelist_attributes = true
    I18n.enforce_available_locales = false
    config.assets.precompile += ['jquery-ui.css','registration.js','jquery.handsontable.full.css','admin_cadidates.css','adminPage.js']
  end
end