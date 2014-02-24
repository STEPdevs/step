Feature: Search and Edit Candidates Information
  Scenario: Admin views age wise candidates bar chart
    Given I am on the admin page of the app
    When I login into app with username "admin@example.com" and password "password"
    And I navigate to "candidates" tab
    Then the "gender_bar_chart" should be visible
    And I hover over the "gender_bar_chart"
    Then I should see popUp box

  Scenario: edit candidates email-address
    When I edit candidate email
      | s_no | email                     |
      | 22   | feature_test.01@gamil.com |
      | 40   | feature_test_02@yahoo.com |
      | 1    | featureTest03@rediff.co.in|
