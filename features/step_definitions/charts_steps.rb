require 'watir-webdriver'

chart_to_element_mapping={
    'barChart' =>"rect.nv-bar",
    'pieChart'=> "g.nv-slice",
    'gender_bar_chart'=>"g.nv-bar"
}

Given(/^I am on the admin page of the app$/) do
  $browser.goto 'http://localhost:3000/admin'
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

When(/^I hover over the "([^"]*)"$/) do |chart|
  $browser.element(:id=>chart).element(:css=>chart_to_element_mapping[chart]).hover
  sleep 1
end
