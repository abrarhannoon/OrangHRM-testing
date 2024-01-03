class EmployeeListPageAssertions {
  verifyFirstNameInputFiledIsExist(isExist: boolean) {
    cy.get('input[name="firstName"]').should(isExist ? "exist" : "not.exist");
    return this;
  }

  verifyFirstNameInputFiledIsContainPlaceHolder(
    placeholder: string,
    isContain: boolean
  ) {
    cy.get('input[name="firstName"]').should(
      "have.attr",
      "placeholder",
      placeholder
    );
    return this;
  }

  verifyMiddleNameInputFiledIsExist(isExist: boolean) {
    cy.get('input[name="middleName"]')
      .clear()
      .should(isExist ? "exist" : "not.exist");

    return this;
  }

  verifyMiddleNameInputFiledIsContainPlaceHolder(
    placeholder: string,
    isContain: boolean
  ) {
    cy.get('input[name="middleName"]').should(
      "have.attr",
      "placeholder",
      placeholder
    );

    return this;
  }

  verifyLastNameInputFiledIsExist(isExist: boolean) {
    cy.get('input[name="lastName"]')
      .should("exist")
      .should(isExist ? "exist" : "not.exist");
    return this;
  }

  verifyCreateLoginDetailsCheckboxIsExist(isExist: boolean) {
    cy.contains("p", "Create Login Details")
      .parent()
      .find('input[type="checkbox"]')
      .should(isExist ? "exist" : "not.exist");
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
    cy.contains("label", "Status")
      .parents()
      .eq(1)
      .contains("span", "Enabled")
      .parent()
      .find("input")
      .should(isExist ? "exist" : "not.exist");

    return this;
  }

  verifyDisabledStatusCheckboxIsexist(isExist: Boolean) {
    cy.contains("label", "Status")
      .parents()
      .eq(1)
      .contains("span", "Disabled")
      .parent()
      .find("input")
      .should(isExist ? "exist" : "not.exist");

    return this;
  }

  verifySaveButtonisExist(isExist: boolean) {
    cy.contains("button", "Save").should(isExist ? "exist" : "not.exist");

    return this;
  }

  verifyCancleButtonisExist(isExist: boolean) {
    cy.contains("button", "Cancel").should(isExist ? "exist" : "not.exist");

    return this;
  }

  verifyEmployeeIdErrorMessageTextIsCorrect(
    errorMessageText: string,
    isExist: boolean
  ) {
    cy.contains("label", "Employee Id")
      .parents()
      .eq(2)
      .contains("span", errorMessageText)
      .should(isExist ? "exist" : "not.exist");
    return this;
  }

  verifyFirstNameErrorMessageTextIsCorrect(
    errorMessageText: string,
    isExist: boolean
  ) {
    cy.get('input[name="firstName"]')
      .parents()
      .eq(2)
      .contains("span", errorMessageText)
      .should(isExist ? "exist" : "not.exist");

    return this;
  }

  verifyLastNameErrorMessageTextIsCorrect(
    errorMessageText: string,
    isExist: boolean
  ) {
    cy.get('input[name="lastName"]')
      .parents()
      .eq(2)
      .contains("span", errorMessageText)
      .should(isExist ? "exist" : "not.exist");

    return this;
  }

  verifyUsernameErrorMessageTextIsCorrect(
    errorMessageText: string,
    isExist: boolean
  ) {
    cy.contains("label", "Username")
      .parents()
      .eq(2)
      .find("span")
      .contains(errorMessageText)
      .should(isExist ? "exist" : "not.exist");

    return this;
  }

  verifyPasswordErrorMessageTextIsCorrect(
    errorMessageText: string,
    isExist: boolean
  ) {
    cy.contains("label", "Password")
      .parents()
      .eq(1)
      .contains("span", errorMessageText)
      .should(isExist ? "exist" : "not.exist");

    return this;
  }

  verifyConfirmPasswordErrorMessageTextIsCorrect(
    errorMessageText: string,
    isExist: boolean
  ) {
    cy.contains("label", "Confirm Password")
      .parents()
      .eq(1)
      .contains("span", errorMessageText)
      .should(isExist ? "exist" : "not.exist");

    return this;
  }

  checkEmployeeListPageIsContainEmployeeId(
    isExist: boolean,
    employeeId: string
  ) {
    cy.contains("div[role=row]", employeeId).should(
      isExist ? "exist" : "not.exist"
    );
    return this;
  }

  verifyEmployeeNameIsExist(
    firstName: string,
    lasttName: string,
    isExist: boolean
  ) {
    cy.contains("h6", `${firstName} ${lasttName}`).should(
      isExist ? "exist" : "not.exist",
      { timeout: 10000 }
    );
    return this;
  }

  verifyEmployeeNameIsContainsValue(
    firstName: string,
    lasttName: string,
    isContain: boolean
  ) {
    cy.contains("h6", `${firstName} ${lasttName}`);
    return this;
  }
}

export default EmployeeListPageAssertions;
