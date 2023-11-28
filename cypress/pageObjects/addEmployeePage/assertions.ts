class AddEmployeePageAssertions {
  checkAddEmployeePageOpendCorrectly() {
    cy.url().should("include", "pim/addEmployee");
    return this;
  }

  verifyFirstNameInputFiledDiplayedCorrectly() {
    cy.get('input[name="firstName"]')
      .should("exist")
      .and("have.attr", "placeholder", "First Name");
    return this;
  }

  verifyMiddleNameInputFiledDiplayedCorrectly() {
    cy.get('input[name="middleName"]')
      .should("exist")
      .and("have.attr", "placeholder", "Middle Name");
    return this;
  }

  verifyLastNameInputDiplayedCorrectly() {
    cy.get('input[name="lastName"]')
      .should("exist")
      .and("have.attr", "placeholder", "Last Name");
    return this;
  }

  verifyCreateLoginDetailsCheckboxIsexist() {
    cy.contains("p", "Create Login Details")
      .parent()
      .find('input[type="checkbox"]')
      .should("exist");
  }

  verifyUsernameInputFiledIsexist(isExist: Boolean) {
    cy.contains("label", "Username")
      .parents()
      .eq(1)
      .find("input")
      .should(isExist ? "exist" : "not.exist");
    return this;
  }

  verifyPasswordInputFiledIsexist(isExist: Boolean) {
    cy.contains("label", "Password")
      .parents()
      .eq(1)
      .find('input[type="password"]')
      .should(isExist ? "exist" : "not.exist");
    return this;
  }

  verifyConfirmPasswordInputFiledIsexist(isExist: Boolean) {
    cy.contains("label", "Confirm Password")
      .parents()
      .eq(1)
      .find('input[type="password"]')
      .should(isExist ? "exist" : "not.exist");

    return this;
  }

  verifyEnabledStatusCheckboxIsexist(isExist: Boolean) {
    cy.contains("span", "Enabled")
      .parent()
      .find('input[value="1"]')
      .should(isExist ? "exist" : "not.exist");

    return this;
  }

  verifyDisabledStatusCheckboxIsexist(isExist: Boolean) {
    cy.contains("span", "Disabled")
      .parent()
      .find('input[value="2"]')
      .should(isExist ? "exist" : "not.exist");

    return this;
  }

  verifySaveButtonIsEnabled(IsEnable: boolean) {
    cy.contains("Save")
      .should("exist")
      .and(IsEnable ? "be.enabled" : "be.disabled");

    return this;
  }

  verifyCancleButtonIsEnabled(IsEnable: boolean) {
    cy.contains("Cancel")
      .should("exist")
      .and(IsEnable ? "be.enabled" : "be.disabled");

    return this;
  }

  verifyEmployeeIdErrorMessageTextIsCorrect(errorMessageText: string) {
    cy.contains("label", "Employee Id")
      .parents()
      .eq(2)
      .contains("span", errorMessageText)
      .should("exist");
    return this;
  }

  verifyFirstNameErrorMessageTextIsCorrect(errorMessageText: string) {
    cy.get('input[name="firstName"]')
      .parents()
      .eq(2)
      .contains("span", errorMessageText)
      .should("exist");

    return this;
  }

  verifyLastNameErrorMessageTextIsCorrect(errorMessageText: string) {
    cy.get('input[name="lastName"]')
      .parents()
      .eq(2)
      .contains("span", errorMessageText)
      .should("exist");

    return this;
  }

  verifyUsernameErrorMessageTextIsCorrect(errorMessageText: string) {
    cy.contains("label", "Username")
      .parents()
      .eq(2)
      .find("span")
      .contains(errorMessageText)
      .should("exist");

    return this;
  }

  verifyPasswordErrorMessageTextIsCorrect(errorMessageText: string) {
    cy.contains("label", "Password")
      .parents()
      .eq(1)
      .contains("span", errorMessageText)
      .should("exist");

    return this;
  }

  verifyStrongPasswordMessageExists() {
    cy.contains("lable", "Password")
      .parents()
      .eq(2)
      .contains(
        "p",
        `For a strong password,please use a hard to guess combination of text 
            with upper and lower case characters, symbols and numbers`
      )
      .should("exist");
  }

  verifyConfirmPasswordErrorMessageTextIsCorrect(errorMessageText: string) {
    cy.contains("label", "Confirm Password")
      .parents()
      .eq(1)
      .contains("span", errorMessageText)
      .should("exist");

    return this;
  }
  checkEmployeeListPageVisited() {
    cy.url().should("include", "/pim/viewEmployeeList");
    return this;
  }
}
export default AddEmployeePageAssertions;
