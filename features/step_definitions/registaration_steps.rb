require 'watir-webdriver'

browser= Watir::Browser.new
browser.driver.manage.window.maximize


Given(/^I am on the registration page of the app$/) do
  browser.goto 'http://step-tw.herokuapp.com/'
end

When(/^registration page loaded$/) do
  browser.goto 'http://step-tw.herokuapp.com/'
end

And(/^I fill in Contact No. with "([^"]*)"$/) do |number|
  browser.text_field(:id => 'user_phone_number').set number

end

And(/^I fill in Confirm Contact No. with "([^"]*)"$/) do |conform_number|
  browser.text_field(:id => 'user_phone_number_confirmation').set conform_number
end

And(/^I fill in Email with "([^"]*)"$/) do |email|
  browser.text_field(:id => 'other_user_details_email').set email
end

And(/^I fill in Name with "([^"]*)"$/) do |name|
  browser.text_field(:id => 'other_user_details_name').set name

end

And(/^I click on "([^"]*)"$/) do |male|
  browser.label(:for => male).click
end

And(/^I fill in DOB  with "([^"]*)"$/) do |dob|
  browser.text_field(:id => 'other_user_details_date_of_birth').set dob
end

And(/^I select "([^"]*)" from "([^"]*)"$/) do |value, field|
  browser.select_list(:id, field).select_value(value)
end


And(/^I press "([^"]*)"$/) do |submit|
  browser.button(:id => submit).click
end


Then(/^I should see registration success message$/) do
  browser.text.include?("Registration error occured, please check if all the fields are entered correctcly").should== true
end


Then(/^I should see number is taken message$/) do
  browser.text.include?("has already been taken").should== true
end

Then(/^I should see contact mismatch error$/) do
  browser.text.include?("not a 10 digit number or mismatched").should== true
  browser.close
end
