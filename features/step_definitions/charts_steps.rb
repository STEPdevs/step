require 'watir-webdriver'
require 'pry'

browser= Watir::Browser.new
browser.driver.manage.window.maximize

Given(/^I login into app with username "([^"]*)" and password "([^"]*)"$/) do |username, password|
  browser.text_field(:id => 'admin_user_email').set username
  browser.text_field(:id => 'admin_user_password').set password
  browser.button(:name => 'commit').click
end

Given(/^I am on the admin page of the app$/) do
  browser.goto 'http://localhost:3000/admin'
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

When(/^the "([^"]*)" chart should be visible$/) do |chart_type|
  browser.div(:id=>chart_type).element(:tag_name=>"svg").element(:tag_name=>"g").exists?.should be_true
end

When(/^I hover over the chart$/) do
  browser.div(:id=>"barChart").element(:css=>"rect.nv-bar").hover
  sleep 1
end

Then(/^I should see popUp box$/) do
  browser.div(:class=>"nvtooltip").exists?.should be_true
end