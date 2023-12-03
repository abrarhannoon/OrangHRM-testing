import {
  Given,
  Then,
  And,
  When,
} from "@badeball/cypress-cucumber-preprocessor";
import AddUserPageActions from "@pageObjects/TR-02_addUserPage/TR-02_actions";
import AddUserPageAssertions from "@pageObjects/TR-02_addUserPage/TR-02_assertions";
import {
  UserRole,
  UserStatus,
} from "@pageObjects/TR-02_addUserPage/TR-02_types";
import ViewSystemUsersPageActions from "@pageObjects/TR-02_viewSystemUsersPage/TR-02_actions";
import ViewSystemUsersPageAssertions from "@pageObjects/TR-02_viewSystemUsersPage/TR-02_assertions";

const addUserPageActions = new AddUserPageActions();
const addUserPageAssertions = new AddUserPageAssertions();
const viewystemUsersPageAssertions = new ViewSystemUsersPageAssertions();
const viewSystemUsersPageActions = new ViewSystemUsersPageActions();

Given("The admin user logged in to the system", () => {
  cy.login();
});

When("The admin user visits add user page", () => {
  addUserPageActions.openAddUserPage();
});

Then("Add user page should display and contains all required fields", () => {
  addUserPageAssertions
    .verifyCancelButtonIsExist(true)
    .verifyConfirmPasswordFieldIsExist(true)
    .verifyPasswordFieldIsExist(true)
    .verifyDefultValueSelectedforStatusField(true)
    .verifyDefultValueSelectedforUserRoleField(true)
    .verifyEmployeeNameFieldIsExist(true)
    .verifySaveButtonIsExist(true)
    .verifyUserRoleFieldIsExist(true)
    .verifyUserRoleFieldIsExist(true);
});

When(
  "The admin user select user role selection value as {string}",
  (userRole: string) => {
    addUserPageActions.selectUserRoleFromDropdown(userRole);
  }
);

When(
  "The admin user select Status selection value as  {string}",
  (status: string) => {
    addUserPageActions.selectStatusFromDropdown(status);
  }
);

When(
  "The admin user enter employee name input field value as {string} and the full name as {string}",
  (employeeName: string, fullEmpolyeeNameOption: string) => {
    addUserPageActions.typeInEmployeeNameInputFiledUsingAutoCompletOption(
      employeeName,
      fullEmpolyeeNameOption
    );
  }
);
When(
  "The admin user enter user name input field value as {string}",
  (userName: string) => {
    addUserPageActions.typeInUsernameInputFiled(userName);
  }
);
When(
  "The admin user enter password input field value as {string}",
  (password: string) => {
    addUserPageActions.typeInPasswordInputFiled(password);
  }
);

When(
  "The admin user enter Cinform Password input field value as {string}",
  (confirmPassword: string) => {
    addUserPageActions.typeInConfirmPasswordInputFiled(confirmPassword);
  }
);

When("click on the Save button", () => {
  addUserPageActions.clickOnSaveButton();
});

Then(
  "User added message should appear and the new user should be added to the system and redirect the user to sytem users page",
  (userName: string) => {
    viewSystemUsersPageActions
      .selectStatusFromDropdown(UserStatus.ENABLED)
      .selectUserRoleFromDropdown(UserRole.ESS)
      .clickOnSearchButton();
    viewystemUsersPageAssertions
      .checkUserGredIsContainCorrectEmployeeName(true, "Abrar h")
      .checkUserGredIsContainCorrectStatus(true, UserStatus.ENABLED)
      .checkUserGredIsContainCorrectUserName(true, "Abrarsssss1a2sd01! Hannoon")
      .checkUserGredIsContainCorrectUserRole(true, UserRole.ESS);
  }
);

Then(
  "An error message with text {string} should displaye for all fields",
  (errorMessage: string) => {
    addUserPageAssertions
      .verifyStatusErrorMessageTextIsCorrect(errorMessage, true)
      .verifyConfirmPasswordErrorMessageTextIsCorrect(errorMessage, true)
      .verifyPasswordErrorMessageTextIsCorrect(errorMessage, true)
      .verifyEmployeeNameErrorMessageTextIsCorrect(errorMessage, true)
      .verifyUserRoleErrorMessageTextIsCorrect(errorMessage, true)
      .verifyUsernameErrorMessageTextIsCorrect(errorMessage, true);
  }
);

Then(
  "An error message with text {string} should displaye for Employee Name",
  (errorMessage: string) => {
    addUserPageAssertions.verifyEmployeeNameErrorMessageTextIsCorrect(
      errorMessage,
      true
    );
  }
);

Then(
  "An error message with text {string} should displaye for User Name",
  (errorMessage: string) => {
    addUserPageAssertions.verifyUsernameErrorMessageTextIsCorrect(
      errorMessage,
      true
    );
  }
);

Then(
  "An error message with text {string} should displaye for Confirm Password field",
  (errorMessage: string) => {
    addUserPageAssertions.verifyConfirmPasswordErrorMessageTextIsCorrect(
      errorMessage,
      true
    );
  }
);

Then(
  "An error message with text {string} should displaye for Password field",
  (errorMessage: string) => {
    addUserPageAssertions.verifyPasswordErrorMessageTextIsCorrect(
      errorMessage,
      true
    );
  }
);

When("The admin user clicks on the Cancel button", () => {
  addUserPageActions.clickOnCancleButton();
});

Then(
  "The admin user should be redirected to the system users page and the user information should not be added",
  () => {
    viewSystemUsersPageActions.typeInUsernameInputFiled("user");
  }
);
