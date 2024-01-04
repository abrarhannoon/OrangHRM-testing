class EmployeeListPageActions {
  openAddEmployeePage() {
    cy.intercept(
      "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees"
    ).as("getEmployees");

    cy.intercept(
      "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users"
    ).as("getUsers");

    cy.visit("/pim/addEmployee");
    cy.wait(["@getEmployees", "@getUsers"]);
  }

  typeInEmpoyeeFirstNameInputField(firstName: string) {
    cy.get('input[name="firstName"]').clear().type(firstName);
    return this;
  }

  typeInEmpoyeeMiddleNameInputField(middleName: string) {
    cy.get('input[name="middleName"]').clear().type(middleName);
    return this;
  }

  typeInEmpoyeeLastNameInputField(lastName: string) {
    cy.get('input[name="lastName"]').clear().type(lastName);
    return this;
  }

  typeInEmployeeIdInputFiled(employeeId?: string) {
    cy.contains("label", "Employee Id")
      .parents()
      .eq(1)
      .find("input")
      .clear()
      .type(`${employeeId}`);
    return this;
  }

  toggleInCreateLoginDetailsCheckbox() {
    cy.contains("p", "Create Login Details")
      .parent()
      .find('input[type="checkbox"]')
      .click({ force: true });
  }

  typeInUsernameInputFiled(userName: string) {
    cy.contains("label", "Username")
      .parents()
      .eq(1)
      .find("input")
      .clear()
      .type(userName);
    return this;
  }

  typeInPasswordInputFiled(password: string) {
    cy.contains("label", "Password")
      .parents()
      .eq(1)
      .find('input[type="password"]')
      .clear()
      .type(password);
    return this;
  }

  typeInConfirmPasswordInputFiled(confirmPassword: string) {
    cy.contains("label", "Confirm Password")
      .parents()
      .eq(1)
      .find('input[type="password"]')
      .clear()
      .type(confirmPassword);
    return this;
  }

  clickInEnabledStatusCheckbox() {
    cy.contains("label", "Status")
      .parents()
      .eq(1)
      .contains("span", "Enabled")
      .parent()
      .find("input")
      .click();
  }
  clickInDisabledStatusCheckbox() {
    cy.contains("label", "Status")
      .parents()
      .eq(1)
      .contains("span", "Disabled")
      .parent()
      .find("input")
      .click();

    return this;
  }

  clickOnSaveButton() {
    cy.contains("button", "Save").click();
  }

  clickOnCancleButton() {
    cy.contains("button", "Cancel").click();
  }

  clickOnSearchButton() {
    cy.contains("button", "Search").click({ force: true });
  }
}
export default EmployeeListPageActions;
