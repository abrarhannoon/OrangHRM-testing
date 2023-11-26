Feature: Login

  Scenario: Successful login with valid credentials
    Given User is on the OrangeHRM login page
    When User enters valid username "Admin" and password "admin123"
    And User clicks on the Login button
    Then User should be redirected to the OrangeHRM dashboard

  Scenario: Unsuccessful login with invalid username
    Given User is on the OrangeHRM login page
    When User enters invalid username "InvalidUser" and valid password "admin123"
    And User clicks on the Login button
    Then User should see an error message indicating invalid credentials

  Scenario: Unsuccessful login with invalid password
    Given User is on the OrangeHRM login page
    When User enters valid username "Admin" and invalid password "invalidPassword"
    And User clicks on the Login button
    Then User should see an error message indicating invalid credentials

  Scenario: Unsuccessful login with empty username and password
    Given User is on the OrangeHRM login page
    When User leaves the username and password fields empty
    And User clicks on the Login button
    Then User should see an error message indicating required fields

  Scenario: Forgot Password link functionality
    Given User is on the OrangeHRM login page
    When User clicks on the "Forgot Your Password?" link
    Then User should be redirected to the password recovery page
