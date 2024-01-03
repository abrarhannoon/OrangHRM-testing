Feature: TC-02_ Add user page

    Scenario:Verify that the add user API is working correctly.
        Given The admin user logged in to the system
        When Send POST API to add user endpoint the user should be added successfully

    Scenario: Verify the accuracy of the add user form by ensuring that all fields are correctly displayed
        Given The admin user logged in to the system
        When The admin user visits add user page
        Then Add user page should display and contains all required fields
    Scenario:Verify that a new Admin user can be added with valid data
        Given The admin user logged in to the system
        When The admin user visits add user page
        And The admin user select user role selection value Admin
        And The admin user select Status selection value Enabled
        And The admin user enter valid user name value
        And The admin user enter valid employee name
        And The admin user enter valid password
        And The admin user enter valid Cinform Password
        And click on the Save button
        Then The new user should be added to the system and redirect the user to system users page

    Scenario: Verify that a new user with ESS user role can be added with valid data.
        Given The admin user logged in to the system
        When The admin user visits add user page
        And The admin user select user role selection value ESS
        And The admin user select Status selection value Enabled
        And The admin user enter valid user name value
        And The admin user enter valid employee name
        And The admin user enter valid password
        And The admin user enter valid Cinform Password
        And click on the Save button
        Then The new ESS user should be added to the system and redirect the user to system users page

    Scenario: Verify that a new user with Enabled status can be added with valid data.
        Given The admin user logged in to the system
        When The admin user visits add user page
        And The admin user select user role selection value Admin
        And The admin user select Status selection value Enabled
        And The admin user enter valid user name value
        And The admin user enter valid employee name
        And The admin user enter valid password
        And The admin user enter valid Cinform Password
        And click on the Save button
        Then The new user should be added to the system and redirect the user to system users page

    Scenario: Verify that a new user with Disabled status can be added with valid data.
        Given The admin user logged in to the system
        When The admin user visits add user page
        And The admin user select user role selection value ESS
        And The admin user select Status selection value as Disabled
        And The admin user enter valid user name value
        And The admin user enter valid employee name
        And The admin user enter valid password
        And The admin user enter valid Cinform Password
        And click on the Save button
        Then The new user with disabled should be added to the system and redirect the user to system users page

    Scenario: Verify that the addition of a new user is not possible when all fields are left empty.
        Given The admin user logged in to the system
        When The admin user visits add user page
        And click on the Save button
        Then An error message with text "Required" should displaye for all fields

    Scenario: Verify that a new user cannot be added if the Employee Name field does not exist
        Given The admin user logged in to the system
        When The admin user visits add user page
        And The admin user select user role selection value ESS
        And The admin user select Status selection value as Disabled
        And The admin user enter valid user name value
        And The admin user enter invalid employee name
        And The admin user enter valid password
        And The admin user enter valid Cinform Password
        And click on the Save button
        Then An error message with text "Invalid" should displaye for Employee Name
    Scenario:Verify the feasibility of adding a new user when the length of the User Name field has a length greater than the maximum length of the input field.
        Given The admin user logged in to the system
        When The admin user visits add user page
        And The admin user select user role selection value Admin
        And The admin user select Status selection value Enabled
        And The admin user enter user name input field greater than the maximum length
        And The admin user enter valid employee name
        And The admin user enter valid password
        And The admin user enter valid Cinform Password
        And click on the Save button
        Then An error message with text "Should not exceed 40 characters" should displaye for User Name
    Scenario: Verify the "Cancel" button returns to the system users page
        Given The admin user logged in to the system
        When The admin user visits add user page
        And The admin user select user role selection value Admin
        And The admin user select Status selection value Enabled
        And The admin user enter valid user name value
        And The admin user enter valid employee name
        And The admin user enter valid password
        And The admin user enter valid Cinform Password
        And The admin user clicks on the Cancel button
        Then The admin user should be redirected to the system users page and the user information should not be added




