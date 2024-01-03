import {
  And,
  Given,
  Then,
  When,
} from "@badeball/cypress-cucumber-preprocessor";

import { NewEmployee } from "@support/employeePage/createDataType";
import { NewUser } from "@support/adminPage/createData";
import EmployeePageDataUtils from "@support/employeePage/dataUtils";
import UserPageDataUtils from "@support/adminPage/dataUtils";
import EmployeeListPageActions from "@pageObjects/employeePage/actions";
import EmployeeListPageAssertions from "@pageObjects/employeePage/assertions";
import { getEmployee } from "@support/employeePage/dataFakers";
import { getUser } from "@support/adminPage/dataFakers";

const employeeListPageAssertions = new EmployeeListPageAssertions();
const employeeListPageActions = new EmployeeListPageActions();
const employeePageDataUtils = new EmployeePageDataUtils();
const userPageDataUtils = new UserPageDataUtils();

const employee: NewEmployee = { ...getEmployee() };

const user = getUser();

afterEach(() => {
  employeePageDataUtils.deleteEmployeeByEmployeeId(employee.employeeId);
  userPageDataUtils.deleteUserByUserName(user.username);
});

Given("The admin user logged in to the system", () => {
  cy.login();
});

When(
  "Send POST API to add employee end point the employee should be added successfully",
  () => {
    employeePageDataUtils.createNewEmployee(employee);
    employeePageDataUtils.deleteEmployeeByEmployeeId(employee.employeeId);
    userPageDataUtils.deleteUserByUserName(user.username);
  }
);

When("The admin user visits the Add Employee page", () => {
  employeeListPageActions.openAddEmployeePage();
});

Then("The first name input field should be displayed correctly", () => {
  employeeListPageAssertions
    .verifyFirstNameInputFiledIsExist(true)
    .verifyFirstNameInputFiledIsContainPlaceHolder("First name", true);
});

Then("The middle name input field should be displayed correctly", () => {
  employeeListPageAssertions
    .verifyMiddleNameInputFiledIsExist(true)
    .verifyMiddleNameInputFiledIsContainPlaceHolder("Middle name", true);
});

Then("The last name input field should be displayed correctly", () => {
  employeeListPageAssertions.verifyLastNameInputFiledIsExist(true);
});

Then("The Create Login Details checkbox should be displayed correctly", () => {
  employeeListPageAssertions.verifyCreateLoginDetailsCheckboxIsExist(true);
});

Then("Cancel and Save button should be existed", () => {
  employeeListPageAssertions
    .verifyCancleButtonisExist(true)
    .verifySaveButtonisExist(true);
});

When("The admin user toggles the Create Login Details checkbox", () => {
  employeeListPageActions.toggleInCreateLoginDetailsCheckbox();
});

Then("The user name input field should be displayed correctly", () => {
  employeeListPageAssertions.verifyUsernameInputFiledIsexist(true);
});

Then("The password input field should be displayed correctly", () => {
  employeeListPageAssertions.verifyPasswordInputFiledIsexist(true);
});

Then("The Confirm Password input field should be displayed correctly", () => {
  employeeListPageAssertions.verifyConfirmPasswordInputFiledIsexist(true);
});

When("The admin user enters valid first name", () => {
  employeeListPageActions.typeInEmpoyeeFirstNameInputField(employee.firstName);
});

When("Enters valid middle name", () => {
  employeeListPageActions.typeInEmpoyeeMiddleNameInputField(
    employee.middleName
  );
});

When("Enters valid last name", () => {
  employeeListPageActions.typeInEmpoyeeLastNameInputField(employee.lastName);
});

const validEmployeeId = "TR-021";

When("Enters valid employee id", () => {
  employeeListPageActions.typeInEmployeeIdInputFiled(employee.employeeId);
});
When("Enters valid user name", () => {
  employeeListPageActions.typeInUsernameInputFiled(user.username);
});

When("Enters valid password", () => {
  employeeListPageActions.typeInPasswordInputFiled(user.password);
});
When("Enters valid confirm password", () => {
  employeeListPageActions.typeInConfirmPasswordInputFiled(user.password);
});
When("The admin user clicks on Save button", () => {
  employeeListPageActions.clickOnSaveButton();
});

When(
  "The admin user enters valid first name for the employee without enters login details",
  () => {
    employeeListPageActions.typeInEmpoyeeFirstNameInputField(
      employee.firstName
    );
  }
);

When(
  "Enters valid middle name for the employee without enters login details",
  () => {
    employeeListPageActions.typeInEmpoyeeMiddleNameInputField(
      employee.middleName
    );
  }
);

When(
  "Enters valid last name for the employee without enters login details",
  () => {
    employeeListPageActions.typeInEmpoyeeLastNameInputField(employee.lastName);
  }
);

When(
  "Enters valid employee id for the employee without enters login details",
  () => {
    employeeListPageActions.typeInEmployeeIdInputFiled(validEmployeeId);
  }
);

When(
  "The admin user enters valid first name for the employee with Already stored id in the system",
  () => {
    employeeListPageActions.typeInEmpoyeeFirstNameInputField(
      employee.firstName
    );
  }
);

When(
  "Enters valid middle name for the employee with Already stored id in the system",
  () => {
    employeeListPageActions.typeInEmpoyeeMiddleNameInputField(
      employee.middleName
    );
  }
);

When(
  "Enters valid last name for the employee with Already stored id in the system",
  () => {
    employeeListPageActions.typeInEmpoyeeLastNameInputField(employee.lastName);
  }
);

When(
  "Enters valid employee id for the employee with Already stored id in the system",
  () => {
    employeeListPageActions.typeInEmployeeIdInputFiled(validEmployeeId);
  }
);
When(
  "The admin user enters valid first name for employee with Existing user name",
  () => {
    employeeListPageActions.typeInEmpoyeeFirstNameInputField(
      employee.firstName
    );
  }
);

When("Enters valid middle name for employee with Existing user name", () => {
  employeeListPageActions.typeInEmpoyeeMiddleNameInputField(
    employee.middleName
  );
});

When("Enters valid last name for employee with Existing user name", () => {
  employeeListPageActions.typeInEmpoyeeLastNameInputField(employee.lastName);
});

const inValidUserName = "Admin";

When("Enters valid user name for employee with Existing user name", () => {
  employeeListPageActions.typeInUsernameInputFiled(inValidUserName);
});

When("Enters valid password for employee with Existing user name", () => {
  employeeListPageActions.typeInPasswordInputFiled(user.password);
});
When(
  "Enters valid confirm password for employee with Existing user name",
  () => {
    employeeListPageActions.typeInConfirmPasswordInputFiled(user.password);
  }
);

When(
  "Enters valid middle name for employee with missing required fields",
  () => {
    employeeListPageActions.typeInEmpoyeeMiddleNameInputField(
      employee.middleName
    );
  }
);

Then(
  "The employee should not be added due to duplicated employee Id and {string} error message should be exists",
  (errorMessageText: string) => {
    employeeListPageAssertions.verifyEmployeeIdErrorMessageTextIsCorrect(
      errorMessageText,
      true
    );
  }
);
When(
  "The admin user enters valid first name for employee with mismatched passwords",
  () => {
    employeeListPageActions.typeInEmpoyeeFirstNameInputField(
      employee.firstName
    );
  }
);

When("Enters valid middle name for employee with mismatched passwords", () => {
  employeeListPageActions.typeInEmpoyeeMiddleNameInputField(
    employee.middleName
  );
});

When("Enters valid last name for employee with mismatched passwords", () => {
  employeeListPageActions.typeInEmpoyeeLastNameInputField(employee.lastName);
});

When("Enters valid employee id for employee with mismatched passwords", () => {
  employeeListPageActions.typeInEmployeeIdInputFiled(employee.employeeId);
});
When("Enters valid user name for employee  with mismatched user name", () => {
  employeeListPageActions.typeInUsernameInputFiled(user.username);
});

When("Enters valid password for employee with mismatched passwords", () => {
  employeeListPageActions.typeInPasswordInputFiled(user.password);
});
const password = "EmployeePass#";
When("Enters mismatched confirm password", () => {
  employeeListPageActions.typeInConfirmPasswordInputFiled(password);
});

Then(
  "The employee should not be added due to duplicated user name and {string} error message should be exists",
  (errorMessageText: string) => {
    employeeListPageAssertions.verifyUsernameErrorMessageTextIsCorrect(
      errorMessageText,
      true
    );
  }
);

Then(
  "Error messages for first and last name {string} fields should be displayed",
  (errorMessageText: string) => {
    employeeListPageAssertions
      .verifyLastNameErrorMessageTextIsCorrect(errorMessageText, true)
      .verifyFirstNameErrorMessageTextIsCorrect(errorMessageText, true);
  }
);

Then(
  "An error message {string} should be displayed",
  (errorMessageText: string) => {
    employeeListPageAssertions.verifyConfirmPasswordErrorMessageTextIsCorrect(
      errorMessageText,
      true
    );
  }
);

When("The admin user clicks on Cancel button", () => {
  employeeListPageActions.clickOnCancleButton();
});

Then(
  "The admin user should be redirected to the employee list page and the employee id should not be exist in employees list",
  () => {
    employeeListPageActions.typeInEmployeeIdInputFiled(employee.employeeId);
    employeeListPageActions.clickOnSearchButton();
    employeeListPageAssertions.checkEmployeeListPageIsContainEmployeeId(
      false,
      employee.employeeId
    );
  }
);
Then("The displayed Personal Details should be correct", () => {
  employeeListPageAssertions
    .verifyEmployeeNameIsExist(employee.firstName, employee.lastName, true)
    .verifyEmployeeNameIsContainsValue(
      employee.firstName,
      employee.lastName,
      true
    );
});
