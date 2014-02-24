require 'watir-webdriver'

$browser= Watir::Browser.new
$browser.driver.manage.window.maximize

chart_to_element_mapping={
    'barChart' =>"rect.nv-bar",
    'pieChart'=> "g.nv-slice",
    'gender_bar_chart'=>"g.nv-bar"
}

Given(/^I login into app with username "([^"]*)" and password "([^"]*)"$/) do |username, password|
  $browser.text_field(:id => 'admin_user_email').set username
  $browser.text_field(:id => 'admin_user_password').set password
  $browser.button(:name => 'commit').click
end

Given(/^I am on the admin page of the app$/) do
  $browser.goto 'http://localhost:3000/admin'
end

When(/^I Logout from the app$/) do
  $browser.li(:id=>"logout").link.click
end

When(/^I navigate to "([^"]*)" tab$/) do |tab_name|
  $browser.li(:id=>tab_name).link.click
end

Then(/^I click on "([^"]*)" option$/) do |option|
  $browser.label(:for => option).click
end

When(/^the "([^"]*)" should be visible$/) do |chart_type|
  $browser.element(:id=>chart_type).element(:tag_name=>"g").exists?.should be_true
end

Then(/^I should see popUp box$/) do
  $browser.div(:class=>"nvtooltip").exists?.should be_true
end
Then(/^I close the $browser$/) do
  $browser.close
end
When(/^I hover over the "([^"]*)"$/) do |chart|
  $browser.element(:id=>chart).element(:css=>chart_to_element_mapping[chart]).hover
  sleep 1
end
