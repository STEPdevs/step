require 'pry'

When(/^I edit candidate$/) do |candidates|
  candidates.hashes.each do |candidate|
    hands_on_table_row_number=(40-(candidate["s_no"].to_i)+1)
    row=$browser.table.tbody.element(:xpath=>"tr[#{hands_on_table_row_number}]")
    email=row.element(:xpath=>"td[6]")
    email.double_click

    new_email=candidate["email"]
    $browser.textarea(:class=>"handsontableInput").set new_email
  end
end
When(/^I verify candidates are updated with below details$/) do |candidates|
  $browser.alert.exists?.should be_true
  $browser.alert.ok
  candidates.hashes.each do |candidate|
    hands_on_table_row_number=(40-(candidate["s_no"].to_i)+1)
    row=$browser.table.tbody.element(:xpath=>"tr[#{hands_on_table_row_number}]")
    email=row.element(:xpath=>"td[6]")
    email.text.should == candidate["changed_data"]
  end
end