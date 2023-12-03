Feature: TC-02_ Add user page


    Scenario: Verify the accuracy of the add user form by ensuring that all fields are correctly displayed
        Given The admin user logged in to the system
        When The admin user visits add user page
        Then Add user page should display and contains all required fields
    @focus
    Scenario:Verify that a new Admin user can be added with valid data
        Given The admin user logged in to the system
        When The admin user visits add user page
        And The admin user select user role selection value as "Admin"
        And The admin user select Status selection value as  "Enabled"
        And The admin user enter user name input field value as "Abrarsssss1a2sd01! Hannoon"
        And The admin user enter employee name input field value as "Abrar" and the full name as "Abrar h"
        And The admin user enter password input field value as "Abrar@123#"
        And The admin user enter Cinform Password input field value as "Abrar@123#"
        And click on the Save button
        Then User added message should appear and the new user should be added to the system and redirect the user to sytem users page
    Scenario: Verify that a new user with ESS user role can be added with valid data.
        Given The admin user logged in to the system
        When The admin user visits add user page
        And The admin user select user role selection value as "ESS"
        And The admin user select Status selection value as  "Enabled"
        And The admin user enter user name input field value as "AbrarEss Hannoon"
        And The admin user enter employee name input field value as "John" and the full name as "John H Doe"
        And The admin user enter password input field value as "Abrar@123#"
        And The admin user enter Cinform Password input field value as "Abrar@123#"
        And click on the Save button
        Then User added message should appear and the new user should be added to the system and redirect the user to sytem users page

    Scenario: Verify that a new user with Enabled status can be added with valid data.
        Given The admin user logged in to the system
        When The admin user visits add user page
        And The admin user select user role selection value as "ESS"
        And The admin user select Status selection value as  "Enabled"
        And The admin user enter user name input field value as "Enabled status UserAB"
        And The admin user enter employee name input field value as "John" and the full name as "John H Doe"
        And The admin user enter password input field value as "Abrar@123#"
        And The admin user enter Cinform Password input field value as "Abrar@123#"
        And click on the Save button
        Then User added message should appear and the new user should be added to the system and redirect the user to sytem users page
    Scenario: Verify that a new user with Disabled status can be added with valid data.
        Given The admin user logged in to the system
        When The admin user visits add user page
        And The admin user select user role selection value as "ESS"
        And The admin user select Status selection value as  "Disabled"
        And The admin user enter user name input field value as "Disabled status UserAB"
        And The admin user enter employee name input field value as "John" and the full name as "John H Doe"
        And The admin user enter password input field value as "Abrar3 Hannoon"
        And The admin user enter password input field value as "Abrar@123#"
        And The admin user enter Cinform Password input field value as "Abrar@123#"
        And click on the Save button
        Then User added message should appear and the new user should be added to the system and redirect the user to sytem users page
    Scenario: Verify that the addition of a new user is not possible when all fields are left empty.
        Given The admin user logged in to the system
        When The admin user visits add user page
        And click on the Save button
        Then An error message with text "Required" should displaye for all fields
    Scenario: Verify that a new user cannot be added if the Employee Name field does not exist
        Given The admin user logged in to the system
        When The admin user visits add user page
        And The admin user select user role selection value as "ESS"
        And The admin user select Status selection value as  "Disabled"
        And The admin user enter user name input field value as "Disabled status UserAB"
        And The admin user enter employee name input field value as "XXXXX" and the full name as "xxxx xxxx"
        And The admin user enter password input field value as "Abrar3 Hannoon"
        And The admin user enter password input field value as "Abrar@123#"
        And The admin user enter Cinform Password input field value as "Abrar@123#"
        And click on the Save button
        Then An error message with text "Invalid" should displaye for Employee Name
    Scenario:Verify the feasibility of adding a new user when the length of the User Name field has a length greater than the maximum length of the input field.
        Given The admin user logged in to the system
        When The admin user visits add user page
        And The admin user select user role selection value as "Admin"
        And The admin user select Status selection value as  "Enabled"
        And The admin user enter user name input field value as "abcdefghijklmnopqrstuvwxyz1234567890abcdefghijABCDEFGHI"
        And The admin user enter employee name input field value as "Abrar" and the full name as "Abrar Yosuof hannoon"
        And The admin user enter password input field value as "Abrar@123#"
        And The admin user enter Cinform Password input field value as "Abrar@123#"
        And click on the Save button
        Then An error message with text "Should not exceed 40 characters" should displaye for User Name
    Scenario:Verify the feasibility of adding a new user when the length of the User Name field has a length lower than the minmume length of the input field.
        Given The admin user logged in to the system
        When The admin user visits add user page
        And The admin user select user role selection value as "Admin"
        And The admin user select Status selection value as  "Enabled"
        And The admin user enter user name input field value as "abc"
        And The admin user enter employee name input field value as "Abrar" and the full name as "Abrar Yosuof hannoon"
        And The admin user enter password input field value as "Abrar@123#"
        And The admin user enter Cinform Password input field value as "Abrar@123#"
        And click on the Save button
        Then An error message with text "Should be at least 5 characters" should displaye for User Name
    Scenario: Verify that the addition of a new user is prevented when the User Name field consists only of special characters.
        Given The admin user logged in to the system
        When The admin user visits add user page
        And The admin user select user role selection value as "Admin"
        And The admin user select Status selection value as  "Enabled"
        And The admin user enter user name input field value as "@#%^&()%#@$"
        And The admin user enter employee name input field value as "Abrar" and the full name as "Abrar Yosuof hannoon"
        And The admin user enter password input field value as "Abrar@123#"
        And The admin user enter Cinform Password input field value as "Abrar@123#"
        And click on the Save button
        Then An error message with text "Invalid" should displaye for User Name
    Scenario: Verify that the addition of a new user is not possible if the User Name field already exists.
        Given The admin user logged in to the system
        When The admin user visits add user page
        And The admin user select user role selection value as "Admin"
        And The admin user select Status selection value as  "Enabled"
        And The admin user enter user name input field value as "Abrar hannoon"
        And The admin user enter employee name input field value as "Abrar" and the full name as "Abrar Yosuof hannoon"
        And The admin user enter password input field value as "Abrar@123#"
        And The admin user enter Cinform Password input field value as "Abrar@123#"
        And click on the Save button
        Then An error message with text "Already exists" should displaye for User Name
    Scenario: Verify that the addition of a new user is not possible if the values entered in the Password and Confirm Password fields are not identical.
        Given The admin user logged in to the system
        When The admin user visits add user page
        And The admin user select user role selection value as "Admin"
        And The admin user select Status selection value as  "Enabled"
        And The admin user enter user name input field value as "AbrarY hannoon"
        And The admin user enter employee name input field value as "Abrar" and the full name as "Abrar Yosuof hannoon"
        And The admin user enter password input field value as "Abrar@123#Hannoon"
        And The admin user enter Cinform Password input field value as "Abrar@123#"
        And click on the Save button
        Then An error message with text "Passwords do not match" should displaye for Confirm Password field

    Scenario: Verify that the addition of a new user is not possible if the values entered in the Password and Confirm Password fields are not identical.
        Given The admin user logged in to the system
        When The admin user visits add user page
        And The admin user select user role selection value as "Admin"
        And The admin user select Status selection value as  "Enabled"
        And The admin user enter user name input field value as "AbrarY hannoon"
        And The admin user enter employee name input field value as "Abrar" and the full name as "Abrar Yosuof hannoon"
        And The admin user enter password input field value as "Abrar@123#Hannoon"
        And The admin user enter Cinform Password input field value as "Abrar@123#"
        And click on the Save button
        Then An error message with text "Passwords do not match" should displaye for Confirm Password field

    Scenario:  Verify the inability to add a new user when the length of the Password field is less than 7 characters.
        Given The admin user logged in to the system
        When The admin user visits add user page
        And The admin user select user role selection value as "Admin"
        And The admin user select Status selection value as  "Enabled"
        And The admin user enter user name input field value as "AbrarYus hannoon"
        And The admin user enter employee name input field value as "Abrar" and the full name as "Abrar Yosuof hannoon"
        And The admin user enter password input field value as "Abrar1"
        And The admin user enter Cinform Password input field value as "Abrar1"
        And click on the Save button
        Then An error message with text "Should have at least 7 characters" should displaye for Password field

    Scenario: Verify the "Cancel" button returns to the system users page
        Given The admin user logged in to the system
        When The admin user visits add user page
        And The admin user select user role selection value as "Admin"
        And The admin user select Status selection value as  "Enabled"
        And The admin user enter user name input field value as "AbrarYus hannoon"
        And The admin user enter employee name input field value as "Abrar" and the full name as "Abrar Yosuof hannoon"
        And The admin user enter password input field value as "Abrar1"
        And The admin user enter Cinform Password input field value as "Abrar1"
        And The admin user clicks on the Cancel button
        Then The admin user should be redirected to the system users page and the user information should not be added




