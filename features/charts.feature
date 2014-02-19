Feature: Candidate Charts
  Scenario: Admin views age wise candidates bar chart
    Given I am on the admin page of the app
    When I login into app with username "admin@example.com" and password "password"
    Then I click on "age" option
    And the "barChart" should be visible
    And  I hover over the "barChart"
    Then I should see popUp box

  Scenario: Admin views course wise candidates pie chart
    When I click on "state" option
    Then the "pieChart" should be visible
    And  I hover over the "pieChart"
    Then I should see popUp box

  Scenario: Admin views year wise candidates pie chart
    When I click on "year_of_pass" option
    Then the "pieChart" should be visible
    And  I hover over the "pieChart"
    Then I should see popUp box


  Scenario: Admin views course wise candidates pie chart
    When I click on "course" option
    Then the "pieChart" should be visible
    And  I hover over the "pieChart"
    Then I should see popUp box

  Scenario: Admin views preferred G.D center pie chart
    When I click on "prefered_gd_center" option
    Then the "pieChart" should be visible
    And  I hover over the "pieChart"
    Then I should see popUp box
    Then I Logout from the app