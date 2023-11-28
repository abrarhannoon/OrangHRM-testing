import {
  Given,
  Then,
  And,
  When,
} from "@badeball/cypress-cucumber-preprocessor";
import AddEmployeePageActions from "@pageObjects/addEmployeePage/actions";
import AddEmployeePageAssertions from "@pageObjects/addEmployeePage/assertions";

const addEmployeePageActions = new AddEmployeePageActions();
const addEmployeePageAssertions = new AddEmployeePageAssertions();

Given("The admin user logged in to the system", () => {
  cy.login();
});

When("The admin user visits the Add Employee page", () => {
  addEmployeePageActions.openAddEmployeePage();
  addEmployeePageAssertions.checkAddEmployeePageOpendCorrectly();
});

Then("The first name input field should be displayed correctly", () => {
  addEmployeePageAssertions.verifyFirstNameInputFiledDiplayedCorrectly();
});

And("The middle name input field should be displayed correctly", () => {
  addEmployeePageAssertions.verifyMiddleNameInputFiledDiplayedCorrectly();
});

And("The last name input field should be displayed correctly", () => {
  addEmployeePageAssertions.verifyLastNameInputDiplayedCorrectly();
});

And("The Create Login Details checkbox should be displayed correctly", () => {
  addEmployeePageAssertions.verifyCreateLoginDetailsCheckboxIsexist();
});

And("Cancel and Save button should be existed and enabled", () => {
  addEmployeePageAssertions.verifyCancleButtonIsEnabled(true);
  addEmployeePageAssertions.verifySaveButtonIsEnabled(true);
});

And("The admin user toggles the Create Login Details checkbox", () => {
  addEmployeePageActions.toggleInCreateLoginDetailsCheckbox();
});

Then("The user name input field should be displayed correctly", () => {
  addEmployeePageAssertions.verifyUsernameInputFiledIsexist(true);
});

And("The password input field should be displayed correctly", () => {
  addEmployeePageAssertions.verifyPasswordInputFiledIsexist(true);
});

And("The Confirm Password input field should be displayed correctly", () => {
  addEmployeePageAssertions.verifyConfirmPasswordInputFiledIsexist(true);
});

And("The admin user enters the First Name {string}", (firstName: string) => {
  addEmployeePageActions.typeInEmpoyeeFirstNameInputField(firstName);
});

And("The middle name {string}", (middleName: string) => {
  addEmployeePageActions.typeInEmpoyeeMiddleNameInputField(middleName);
});

And("The last name {string}", (lastName: string) => {
  addEmployeePageActions.typeInEmpoyeeLastNameInputField(lastName);
});

And("The employee id {string}", (employeeId: string) => {
  addEmployeePageActions.typeInEmployeeIdInputFiled(employeeId);
});

And("The user name {string}", (userName: string) => {
  addEmployeePageActions.typeInUsernameInputFiled(userName);
});

And("The password {string}", (password: string) => {
  addEmployeePageActions.typeInPasswordInputFiled(password);
});
And("The confirm password {string}", (confirmPassword: string) => {
  addEmployeePageActions.typeInConfirmPasswordInputFiled(confirmPassword);
});

And("The admin user clicks on Save button", () => {
  addEmployeePageActions.clickOnSaveButton();
});

/*Then(
  "The employee should be added successfully and redirect to employee list page",
  () => {
    cy.url().should("include", "viewPersonalDetails/empNumber");
  });*/

Then(
  "The employee should not be added due to duplicated employee Id and {string} error message should be exists",
  (errorMessageText: string) => {
    addEmployeePageAssertions.verifyEmployeeIdErrorMessageTextIsCorrect(
      errorMessageText
    );
  }
);

Then(
  "The employee should not be added due to duplicated user name and {string} error message should be exists",
  (errorMessageText: string) => {
    addEmployeePageAssertions.verifyUsernameErrorMessageTextIsCorrect(
      errorMessageText
    );
  }
);

Then(
  "Error messages for first and last name {string} fields should be displayed",
  (errorMessageText: string) => {
    addEmployeePageAssertions
      .verifyLastNameErrorMessageTextIsCorrect(errorMessageText)
      .verifyFirstNameErrorMessageTextIsCorrect(errorMessageText);
  }
);

Then(
  "An error message {string} should be displayed",
  (errorMessageText: string) => {
    addEmployeePageAssertions.verifyConfirmPasswordErrorMessageTextIsCorrect(
      errorMessageText
    );
  }
);

And("The admin user clicks on Cancel button", () => {
  addEmployeePageActions.clickOnCancleButton();
});

Then(
  "The admin user should be redirected to the employee list page and the employee details should not be added",
  () => {
    addEmployeePageAssertions.checkEmployeeListPageVisited();
  }
);
