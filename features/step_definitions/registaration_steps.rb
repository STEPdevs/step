require 'watir-webdriver'


get_id_for={
    "Contact No." => 'user_phone_number',
    "Confirm Contact No." => 'user_phone_number_confirmation',
    "Email" => 'other_user_details_email',
    "Name" => 'other_user_details_name',
    "DOB" => 'other_user_details_date_of_birth'
}

Given(/^I am on the registration page of the app$/) do
  $browser.goto 'http://step-tw.herokuapp.com/'
end

When(/^registration page loaded$/) do
  $browser.goto 'http://step-tw.herokuapp.com/'
end


When(/^I fill in "([^"]*)" with "([^"]*)"$/) do |name, value|
  $browser.text_field(:id => get_id_for[name]).set value
end

And(/^I click on "([^"]*)"$/) do |male|
  $browser.label(:for => male).click
end


And(/^I select "([^"]*)" from "([^"]*)"$/) do |value, field|
  $browser.select_list(:id, field).select_value(value)
end


And(/^I press "([^"]*)"$/) do |submit|
  $browser.button(:id => submit).click
end


Then(/^I should see registration success message$/) do
  $browser.text.include?("Registration error occured, please check if all the fields are entered correctcly").should== true
end


Then(/^I should see number is taken message$/) do
  $browser.text.include?("has already been taken").should== true
end

Then(/^I should see contact mismatch error$/) do
  $browser.text.include?("not a 10 digit number or mismatched").should== true
  $browser.close
end