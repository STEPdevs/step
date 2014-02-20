Feature: Registration page
Scenario Outline: User views registration page
  Given I am on the registration page of the app
  When registration page loaded
  And I fill in Contact No. with "<number>"
  And I fill in Confirm Contact No. with "<conform_number>"
  And I fill in Email with "<email>"
  And I fill in Name with "<name>"
  And I click on "<male>"
  And I fill in DOB  with "<dob>"
  And I select "<state_value>" from "<field>"
  And I select "<diploma_value>" from "<diploma_field>"
  And I select "<year_of_pass_value>" from "<year_of_pass_field>"
  And I select "<prefer_ac_value>" from "<prefer_ac_field>"
  And I select "<prefer_gd_value>" from "<prefer_gd_field>"
  And I press "<submit>"
  Then I should see registration success message
  Examples:
  | number     | conform_number | email            | name  | male                           | dob        | state_value | field                    | diploma_value                   | diploma_field             | year_of_pass_value | year_of_pass_field              | prefer_ac_value | prefer_ac_field                              | prefer_gd_value | prefer_gd_field                       | submit |
  | 1234567891 | 1234567891     | dmin@example.com | Admin | other_user_details_gender_male | 13/10/1991 | Delhi       | other_user_details_state | Diploma in computer engennering | other_user_details_course | 2014               | other_user_details_year_of_pass |    Bangalore    | other_user_details_preferred_aptitude_center |Chennai          | other_user_details_preferred_gd_center|submit |
