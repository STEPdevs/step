Feature: Age Wise Candidate Chart
  Scenario: Admin views age wise candidates group count chart
    Given I am on the admin page of the app
    When I login into app with username "admin@example.com" and password "password"
    And I navigate to "dashboard" tab
    Then I click on "age" option
    And the "barChart" chart should be visible
    And I hover over the chart
    Then I should see popUp box
    And I Logout from the app
