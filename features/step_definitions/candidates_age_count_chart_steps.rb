require 'watir-webdriver'

browser= Watir::Browser.new

Given(/^I login into app with username "([^"]*)" and password "([^"]*)"$/) do |username, password|
  browser.text_field(:id => 'admin_user_email').set username
  browser.text_field(:id => 'admin_user_password').set password
  browser.button(:name => 'commit').click
end

Given(/^I am on the admin page of the app$/) do
  browser.goto 'http://step-tw.herokuapp.com/admin'
end

When(/^I Logout from the app$/) do
  browser.li(:id=>"logout").link.click
  browser.close
end
When(/^I navigate to "([^"]*)" tab$/) do |tab_name|
  browser.li(:id=>tab_name).link.click
end
Then(/^I click on "([^"]*)" option$/) do |option|
  browser.label(:for => option).click
end