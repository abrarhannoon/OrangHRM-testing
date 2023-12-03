class AddEmployeePageActions {
  openAddEmployeePage() {
    cy.visit("/pim/addEmployee");
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
    cy.contains("span", "Enabled").parent().find('input[value="1"]').click();
  }
  clickInDisabledStatusCheckbox() {
    cy.contains("span", "Disabled").parent().find('input[value="2"]').click();
  }

  clickOnSaveButton() {
    cy.contains("Save").click();
  }

  clickOnCancleButton() {
    cy.contains("Cancel").click();
  }
}
export default AddEmployeePageActions;
