import {
  And,
  Given,
  Then,
  When,
} from "@badeball/cypress-cucumber-preprocessor";
import AddEmployeePageActions from "@pageObjects/TR-01_addEmployeePage/TR-01_actions";
import AddEmployeePageAssertions from "@pageObjects/TR-01_addEmployeePage/TR-01_assertions";
import EmployeeListPageActions from "@pageObjects/TR-01_employeeListPage/TR-01_actions";
import EmployeeListPageAssertions from "@pageObjects/TR-01_employeeListPage/TR-01_assertions";
import ViewPersonalDetailsPageAssertions from "@pageObjects/TR-01_viewEmployeePersonalDetailsPage/TR-01_assertions";

const addEmployeePageActions = new AddEmployeePageActions();
const addEmployeePageAssertions = new AddEmployeePageAssertions();
const employeeListPageAssertions = new EmployeeListPageAssertions();
const employeeListPageActions = new EmployeeListPageActions();
const viewPersonalDetailsPageAssertions =
  new ViewPersonalDetailsPageAssertions();

// const employee: NewEmployee = {
//   empPicture: null,
//   employeeId: 44,
//   firstName: "TR-01 Cypress Employee",
//   middleName: "Middle name",
//   lastName: "Last name"
// }

Given("The admin user logged in to the system", () => {
  cy.login();
});

When("The admin user visits the Add Employee page", () => {
  addEmployeePageActions.openAddEmployeePage();
});

Then("The first name input field should be displayed correctly", () => {
  addEmployeePageAssertions
    .verifyFirstNameInputFiledIsExist(true)
    .verifyFirstNameInputFiledIsContainPlaceHolder(true, "First Name");
});

Then("The middle name input field should be displayed correctly", () => {
  addEmployeePageAssertions
    .verifyMiddleNameInputFiledIsExist(true)
    .verifyMiddleNameInputFiledIsContainPlaceHolder(true, "Middle Name");
});

Then("The last name input field should be displayed correctly", () => {
  addEmployeePageAssertions
    .verifyLastNameInputFiledIsExist(true)
    .verifyLastNameInputFiledIsContainPlaceHolder(true, "Last Name");
});

Then("The Create Login Details checkbox should be displayed correctly", () => {
  addEmployeePageAssertions.verifyCreateLoginDetailsCheckboxIsExist(true);
});

Then("Cancel and Save button should be existed", () => {
  addEmployeePageAssertions
    .verifyCancleButtonisExist(true)
    .verifySaveButtonisExist(true);
});

When("The admin user toggles the Create Login Details checkbox", () => {
  addEmployeePageActions.toggleInCreateLoginDetailsCheckbox();
});

Then("The user name input field should be displayed correctly", () => {
  addEmployeePageAssertions.verifyUsernameInputFiledIsexist(true);
});

Then("The password input field should be displayed correctly", () => {
  addEmployeePageAssertions.verifyPasswordInputFiledIsexist(true);
});

Then("The Confirm Password input field should be displayed correctly", () => {
  addEmployeePageAssertions.verifyConfirmPasswordInputFiledIsexist(true);
});

When("The admin user enters the First Name {string}", (firstName: string) => {
  // addEmployeePageActions.typeInEmpoyeeFirstNameInputField(employee.firstName);
  addEmployeePageActions.typeInEmpoyeeFirstNameInputField(firstName);
});

When("The middle name {string}", (middleName: string) => {
  // addEmployeePageActions.typeInEmpoyeeMiddleNameInputField(employee.middleName);
  addEmployeePageActions.typeInEmpoyeeMiddleNameInputField(middleName);
});

When("The last name {string}", (lastName: string) => {
  // addEmployeePageActions.typeInEmpoyeeLastNameInputField(employee.lastName);
  addEmployeePageActions.typeInEmpoyeeLastNameInputField(lastName);
});

When("The employee id {string}", (employeeId: string) => {
  // addEmployeePageActions.typeInEmployeeIdInputFiled(employee.employeeId);
  addEmployeePageActions.typeInEmployeeIdInputFiled(employeeId);
});

When("The user name {string}", (userName: string) => {
  addEmployeePageActions.typeInUsernameInputFiled(userName);
});

When("The password {string}", (password: string) => {
  addEmployeePageActions.typeInPasswordInputFiled(password);
});
When("The confirm password {string}", (confirmPassword: string) => {
  addEmployeePageActions.typeInConfirmPasswordInputFiled(confirmPassword);
});

When("The admin user clicks on Save button", () => {
  addEmployeePageActions.clickOnSaveButton();
});

Then(
  "The employee should be added successfully and redirect to view personal Details page and the employee id {string} should be exist",
  (employeeId: string) => {
    viewPersonalDetailsPageAssertions.VerifyEmployeeIdIsCorrect(
      true,
      employeeId
    );
  }
);

Then(
  "The employee should not be added due to duplicated employee Id and {string} error message should be exists",
  (errorMessageText: string) => {
    addEmployeePageAssertions.verifyEmployeeIdErrorMessageTextIsCorrect(
      errorMessageText,
      true
    );
  }
);

Then(
  "The employee should not be added due to duplicated user name and {string} error message should be exists",
  (errorMessageText: string) => {
    addEmployeePageAssertions.verifyUsernameErrorMessageTextIsCorrect(
      errorMessageText,
      true
    );
  }
);

Then(
  "Error messages for first and last name {string} fields should be displayed",
  (errorMessageText: string) => {
    addEmployeePageAssertions
      .verifyLastNameErrorMessageTextIsCorrect(errorMessageText, true)
      .verifyFirstNameErrorMessageTextIsCorrect(errorMessageText, true);
  }
);

Then(
  "An error message {string} should be displayed",
  (errorMessageText: string) => {
    addEmployeePageAssertions.verifyConfirmPasswordErrorMessageTextIsCorrect(
      errorMessageText,
      true
    );
  }
);

When("The admin user clicks on Cancel button", () => {
  addEmployeePageActions.clickOnCancleButton();
});

Then(
  "The admin user should be redirected to the employee list page and the employee id {string} should not be exist in employees list",
  (employeeId: string) => {
    employeeListPageActions.typeInEmployeeIdInputFiled(employeeId);
    employeeListPageActions.clickOnSearchButton();
    employeeListPageAssertions.checkEmployeeListPageIsContainEmployeeId(
      false,
      employeeId
    );
  }
);

// afterEach(() => {
//   employeePageDataUtils.deleteEmployeeByEmployeeId(employee.employeeId);
// })
