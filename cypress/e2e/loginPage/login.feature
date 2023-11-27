Feature: login

  Scenario: Successful login with valid credentials
    Given User visits the login page
    When User types in the Username input field "Admin"
    And User types in the password input field "admin123"
    And User clicks on the login button
    Then The dashboard should be opened
    And The navbar element should be existed with text "Admin"

  Scenario: Unsuccessful login with invalid Username
    Given User visits the login page
    When User types in the Username input field "InvalidUser"
    And User types in the password input field "admin123"
    And User clicks on the login button
    Then The invalid credentials error message should be displayed "Invalid credentials"

  Scenario: Unsuccessful login with invalid password
    Given User visits the login page
    When User types in the Username input field "Admin"
    And User types in the password input field "incorrectpassword"
    And User clicks on the login button
    Then The invalid credentials error message should be displayed "Invalid credentials"

  Scenario: Unsuccessful login with empty Username
    Given User visits the login page
    When User types in the password input field "admin123"
    And User clicks on the login button
    Then The Username error message should be displayed with text "Required"

  Scenario: Unsuccessful login with empty password
    Given User visits the login page
    When User types in the Username input field "Admin"
    And User clicks on the login button
    Then The password error message is displayed with text "Required"

  Scenario: Unsuccessful login with empty Username and password
    Given User visits the login page
    When User clicks on the login button
    Then The Username error message should be displayed with text "Required"
    And The password error message is displayed with text "Required"
    And The login page URL should be verified
