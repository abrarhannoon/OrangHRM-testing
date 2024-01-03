import {
  Given,
  Then,
  And,
  When,
} from "@badeball/cypress-cucumber-preprocessor";
import AddUserPageActions from "@pageObjects/adminPage/Users/actions";
import AddUserPageAssertions from "@pageObjects/adminPage/Users/assertions";
import { NewUser } from "@support/adminPage/createData";
import { getUser } from "@support/adminPage/dataFakers";
import UserPageDataUtils from "@support/adminPage/dataUtils";
import { StatusType, UserRole } from "@support/adminPage/types";
import { NewEmployee } from "@support/employeePage/createDataType";
import { getEmployee } from "@support/employeePage/dataFakers";
import EmployeePageDataUtils from "@support/employeePage/dataUtils";

const addUserPageActions = new AddUserPageActions();
const addUserPageAssertions = new AddUserPageAssertions();
const userPageDataUtils = new UserPageDataUtils();
const employeePageDataUtils = new EmployeePageDataUtils();

const user = getUser();
const employee = getEmployee();

Given("The admin user logged in to the system", () => {
  cy.login();
});

When("The admin user visits add user page", () => {
  addUserPageActions.openAddUserPage();
});

When(
  "Send POST API to add user endpoint the user should be added successfully",
  () => {
    employeePageDataUtils.createNewEmployee(employee).then((empNumber) => {
      userPageDataUtils.createNewUser({ ...user, empNumber });
    });
  }
);

Then("Add user page should display and contains all required fields", () => {
  addUserPageAssertions
    .verifyCancelButtonIsExist(true)
    .verifyConfirmPasswordFieldIsExist(true)
    .verifyPasswordFieldIsExist(true)
    .verifyEmployeeNameFieldIsExist(true)
    .verifySaveButtonIsExist(true)
    .verifyUserRoleFieldIsExist(true)
    .verifyUserRoleFieldIsExist(true);
});

When("The admin user select user role selection value Admin", () => {
  addUserPageActions.selectUserRoleFromDropdown(user.userRoleId);
});

When("The admin user select Status selection value Enabled", () => {
  addUserPageActions.selectStatusFromDropdown(user.status);
});

When("The admin user enter valid employee name", () => {
  addUserPageActions.typeInEmployeeNameInputFiledUsingAutoCompletOption(
    employee.firstName,
    employee.lastName
  );
});

When("The admin user enter valid user name value", () => {
  addUserPageActions.typeInUsernameInputFiled(user.username);
});

When("The admin user enter valid password", () => {
  addUserPageActions.typeInPasswordInputFiled(user.password);
});

When(
  "The admin user enter valid Cinform Password",
  (confirmPassword: string) => {
    addUserPageActions.typeInConfirmPasswordInputFiled(user.password);
  }
);

When("click on the Save button", () => {
  addUserPageActions.clickOnSaveButton();
});

const disabledStatus: StatusType = "Disabled";
const essUserRole: keyof typeof UserRole = "ESS";

When("The admin user select user role selection value ESS", () => {
  addUserPageActions.selectUserRoleFromDropdown(essUserRole);
});

When("The admin user select Status selection value as Disabled", () => {
  addUserPageActions.selectStatusFromDropdown(disabledStatus);
});

let text: string = "a".repeat(60);
When(
  "The admin user enter user name input field greater than the maximum length",
  () => {
    addUserPageActions.typeInUsernameInputFiled(text);
  }
);

Then(
  "The new user should be added to the system and redirect the user to system users page",
  () => {
    addUserPageAssertions
      .checkUserNameIsExistInUserGred(user.username, true)
      .checkStatusIsExistInUserGred(user.username, user.status, true)
      .checkUserRoleIsExistInUserGred(user.username, user.userRoleId, true);
  }
);

Then(
  "The new ESS user should be added to the system and redirect the user to system users page",
  () => {
    addUserPageAssertions
      .checkUserNameIsExistInUserGred(user.username, true)
      .checkStatusIsExistInUserGred(user.username, user.status, true)
      .checkUserRoleIsExistInUserGred(user.username, essUserRole, true);
  }
);

Then(
  "The new user with disabled should be added to the system and redirect the user to system users page",
  () => {
    addUserPageAssertions
      .checkUserNameIsExistInUserGred(user.username, true)
      .checkStatusIsExistInUserGred(user.username, disabledStatus, true)
      .checkUserRoleIsExistInUserGred(user.username, essUserRole, true);
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

const invalidEmployeeName = "invalid name";
When("The admin user enter invalid employee name", () => {
  addUserPageActions.typeInEmployeeNameInputFiled(invalidEmployeeName);
});

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
    addUserPageActions.typeInUsernameInputFiled(user.username);
  }
);

afterEach(() => {
  userPageDataUtils.deleteUserByUserName(getUser().username);
});
