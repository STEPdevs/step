source 'https://rubygems.org'
gem 'rails', '4.0.2'
gem 'sass-rails', '~> 4.0.0'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.0.0'
gem 'jquery-rails'
gem 'turbolinks'
gem 'jbuilder', '~> 1.2'
gem 'slim', '1.3.8'
gem 'haml2slim'
gem 'activeadmin', :git => "git://github.com/gregbell/active_admin.git"
gem 'devise'
gem 'simple_form'
gem 'protected_attributes'
gem 'validates_timeliness', '~> 3.0'
gem 'database_cleaner'
gem 'puma'
gem 'pry'

group :doc do
  gem 'sdoc', require: false
end


group :production do
	gem 'rails_12factor'
  gem 'pg'
end

group :test,:development do
  gem  'cucumber' ,:require => false
  gem 'watir-webdriver', :require => false
  gem "page-object", :require => false
  gem 'factory_girl_rails', :require => false
  gem 'rspec-rails'
  gem 'rspec-jasmine'
  gem 'jasmine'
  gem 'pg'
end
