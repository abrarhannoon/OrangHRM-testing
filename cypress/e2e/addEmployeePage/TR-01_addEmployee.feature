Feature: TR-01_Add employee page
    Scenario:Verify that the add employee API is working correctly.
        Given The admin user logged in to the system
        When Send POST API to add employee end point the employee should be added successfully

    Scenario: Verify all elements on the Add Employee Page are displayed successfully when the page loaded
        Given The admin user logged in to the system
        When The admin user visits the Add Employee page
        Then The first name input field should be displayed correctly
        And The middle name input field should be displayed correctly
        And The last name input field should be displayed correctly
        And The Create Login Details checkbox should be displayed correctly
        And Cancel and Save button should be existed

    Scenario: verify Create Login Details form elements are displayed successfully when toggled in the Create Login Details checkbox.
        Given The admin user logged in to the system
        When The admin user visits the Add Employee page
        And The admin user toggles the Create Login Details checkbox
        Then The user name input field should be displayed correctly
        And The password input field should be displayed correctly
        And The Confirm Password input field should be displayed correctly
    @focus
    Scenario: Verify successful employee creation with valid data
        Given The admin user logged in to the system
        When The admin user visits the Add Employee page
        And The admin user enters valid first name
        And Enters valid middle name
        And Enters valid last name
        And Enters valid employee id
        And The admin user toggles the Create Login Details checkbox
        And Enters valid user name
        And Enters valid password
        And Enters valid confirm password
        And The admin user clicks on Save button
        Then The displayed Personal Details should be correct

    Scenario: Verify successful employee creation without create login details
        Given The admin user logged in to the system
        When The admin user visits the Add Employee page
        And The admin user enters valid first name for the employee without enters login details
        And Enters valid employee id
        And Enters valid middle name for the employee without enters login details
        And Enters valid last name for the employee without enters login details
        And The admin user clicks on Save button
        Then The displayed Personal Details should be correct

    Scenario: Verify unsuccessful employee creation when already exists employee id enterd
        Given The admin user logged in to the system
        When The admin user visits the Add Employee page
        And The admin user enters valid first name for the employee without enters login details
        And Enters valid middle name for the employee without enters login details
        And Enters valid last name for the employee without enters login details
        And Enters valid employee id for the employee with Already stored id in the system
        And The admin user clicks on Save button
        And The admin user visits the Add Employee page
        And The admin user enters valid first name for the employee with Already stored id in the system
        And Enters valid middle name for the employee with Already stored id in the system
        And Enters valid last name for the employee with Already stored id in the system
        And Enters valid employee id for the employee with Already stored id in the system
        Then The employee should not be added due to duplicated employee Id and "Employee Id already exists" error message should be exists

    Scenario: Verify unsuccessful employee creation when already exists user name enterd
        Given The admin user logged in to the system
        When The admin user visits the Add Employee page
        And The admin user enters valid first name for employee with Existing user name
        And Enters valid middle name for employee with Existing user name
        And Enters valid last name for employee with Existing user name
        And The admin user toggles the Create Login Details checkbox
        And Enters valid user name for employee with Existing user name
        And Enters valid password for employee with Existing user name
        And Enters valid confirm password for employee with Existing user name
        Then The employee should not be added due to duplicated user name and "Username already exists" error message should be exists

    Scenario: Verify unsuccessful employee creation with missing required fields
        Given The admin user logged in to the system
        When The admin user visits the Add Employee page
        And Enters valid middle name for employee with missing required fields
        And The admin user clicks on Save button
        Then Error messages for first and last name "Required" fields should be displayed

    Scenario: Verify unsuccessful employee creation with mismatched passwords
        Given The admin user logged in to the system
        When The admin user visits the Add Employee page
        And The admin user enters valid first name for employee with mismatched passwords
        And Enters valid middle name for employee with mismatched passwords
        And Enters valid last name for employee with mismatched passwords
        And Enters valid employee id for employee with mismatched passwords
        And The admin user toggles the Create Login Details checkbox
        And Enters valid user name for employee  with mismatched user name
        And Enters valid password for employee with mismatched passwords
        And Enters mismatched confirm password
        Then An error message "Passwords do not match" should be displayed

    Scenario: Verify the "Cancel" button returns to the employee list page
        Given The admin user logged in to the system
        When The admin user visits the Add Employee page
        And The admin user enters valid first name
        And Enters valid middle name
        And Enters valid last name
        And Enters valid employee id
        And The admin user clicks on Cancel button
        Then The admin user should be redirected to the employee list page and the employee id should not be exist in employees list








