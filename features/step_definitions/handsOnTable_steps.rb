require 'pry'

When(/^I edit candidate email$/) do |candidates|
  candidates.hashes.each do |candidate|
    hands_on_table_row_number=(40-(candidate["s_no"].to_i)+1)
    row=$browser.table.tbody.element(:xpath=>"tr[#{hands_on_table_row_number}]")
    email=row.element(:xpath=>"td[6]")
    #binding.pry
  end
end