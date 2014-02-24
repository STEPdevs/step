$browser= Watir::Browser.new
$browser.driver.manage.window.maximize


Given(/^I login into app with username "([^"]*)" and password "([^"]*)"$/) do |username, password|
  $browser.text_field(:id => 'admin_user_email').set username
  $browser.text_field(:id => 'admin_user_password').set password
  $browser.button(:name => 'commit').click
end

When(/^I navigate to "([^"]*)" tab$/) do |tab_name|
  $browser.li(:id=>tab_name).link.click
end


When(/^I Logout from the app$/) do
  $browser.li(:id=>"logout").link.click
end


Then(/^I close the $browser$/) do
  $browser.close
end