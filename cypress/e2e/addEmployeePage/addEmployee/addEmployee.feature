Feature: Add employee page

    Scenario: Verify all elements on the Add Employee Page are displayed successfully when the page loaded
        Given The admin user logged in to the system
        When The admin user visits the Add Employee page
        Then The first name input field should be displayed correctly
        And The middle name input field should be displayed correctly
        And The last name input field should be displayed correctly
        And The Create Login Details checkbox should be displayed correctly
        And Cancel and Save button should be existed and enabled

    Scenario: verify Create Login Details form elements are displayed successfully when toggled in the Create Login Details checkbox.
        Given The admin user logged in to the system
        When The admin user visits the Add Employee page
        And The admin user toggles the Create Login Details checkbox
        Then The user name input field should be displayed correctly
        And The password input field should be displayed correctly
        And The Confirm Password input field should be displayed correctly


    Scenario: Verify successful employee creation with valid data
        Given The admin user logged in to the system
        When The admin user visits the Add Employee page
        And The admin user enters the First Name "Abrar"
        And The middle name "Yosuof"
        And The last name "hannoon"
        And The employee id "12023"
        And The admin user toggles the Create Login Details checkbox
        And The user name "abrar_user"
        And The password "StrongPass123"
        And The confirm password "StrongPass123"
        And The admin user clicks on Save button


    Scenario: Verify successful employee creation without create login details
        Given The admin user logged in to the system
        When The admin user visits the Add Employee page
        And The admin user enters the First Name "Abrar"
        And The middle name "Yosuof"
        And The last name "hannoon"
        And The employee id "12024"
        And The admin user clicks on Save button
    Scenario: Verify unsuccessful employee creation when already exists employee id enterd
        Given The admin user logged in to the system
        When The admin user visits the Add Employee page
        And The admin user enters the First Name "Abrar"
        And The middle name "Yosuof"
        And The last name "hannoon"
        And The employee id "12024"
        And The admin user toggles the Create Login Details checkbox
        And The user name "abrar_user2"
        And The password "StrongPass123"
        And The confirm password "StrongPass123"
        And The admin user clicks on Save button
        Then The employee should not be added due to duplicated employee Id and "Employee Id already exists" error message should be exists

    Scenario: Verify unsuccessful employee creation when already exists user name enterd
        Given The admin user logged in to the system
        When The admin user visits the Add Employee page
        And The admin user enters the First Name "Abrar"
        And The middle name "Yosuof"
        And The last name "hannoon"
        And The employee id "12029"
        And The admin user toggles the Create Login Details checkbox
        And The user name "abrar_user2"
        And The password "StrongPass123"
        And The confirm password "StrongPass123"
        And The admin user clicks on Save button
        Then The employee should not be added due to duplicated user name and "Username already exists" error message should be exists
    Scenario:   Verify unsuccessful employee creation with missing required fields
        Given The admin user logged in to the system
        When The admin user visits the Add Employee page
        And The middle name "Yosuof"
        And The employee id "12042"
        And The admin user clicks on Save button
        Then Error messages for first and last name "Required" fields should be displayed
    Scenario: Verify unsuccessful employee creation with mismatched passwords

        Given The admin user logged in to the system
        When The admin user visits the Add Employee page
        And The admin user enters the First Name "Abrar"
        And The middle name "Yosuof"
        And The last name "hannoon"
        And The employee id "12029"
        And The admin user toggles the Create Login Details checkbox
        And The user name "abrar_user21"
        And The password "StrongPass12345"
        And The confirm password "StrongPass123"
        And The admin user clicks on Save button
        Then An error message "Passwords do not match" should be displayed
    Scenario: Verify the "Cancel" button returns to the employee list page
        Given The admin user logged in to the system
        When The admin user visits the Add Employee page
        And The admin user enters the First Name "Abrar"
        And The middle name "Yosuof"
        And The last name "hannoon"
        And The employee id "12099"
        And The admin user clicks on Cancel button
        Then The admin user should be redirected to the employee list page and the employee details should not be added









