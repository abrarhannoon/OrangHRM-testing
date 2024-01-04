class AddUserPageAssertions {
  VerifyPageTitleIsCorrect(isExist: boolean) {
    cy.contains("h6", "Add User").should(isExist ? "exist" : "not.exist");
    return this;
  }
  verifyUserRoleFieldIsExist(isExist: boolean) {
    cy.contains("label", "User Role").should(isExist ? "exist" : "not.exist");
    return this;
  }

  verifyStatusFieldIsExist(isExist: boolean) {
    cy.contains("label", "Status").should(isExist ? "exist" : "not.exist");
    return this;
  }

  verifyEmployeeNameFieldIsExist(isExist: boolean) {
    cy.contains("label", "Employee Name").should(
      isExist ? "exist" : "not.exist"
    );
    return this;
  }

  verifyUsernameFieldIsExist(isExist: boolean) {
    cy.contains("label", "Username").should(isExist ? "exist" : "not.exist");
    return this;
  }

  verifyPasswordFieldIsExist(isExist: boolean) {
    cy.contains("label", "Password").should(isExist ? "exist" : "not.exist");
    return this;
  }

  verifyConfirmPasswordFieldIsExist(isExist: boolean) {
    cy.contains("label", "Confirm Password").should(
      isExist ? "exist" : "not.exist"
    );
    return this;
  }

  verifyCancelButtonIsExist(isExist: boolean) {
    cy.contains("button", "Cancel").should(isExist ? "exist" : "not.exist");
    return this;
  }

  verifySaveButtonIsExist(isExist: boolean) {
    cy.contains("button", "Save").should(isExist ? "exist" : "not.exist");
    return this;
  }

  verifyDefultValueSelectedforUserRoleField(isExist: boolean, value: string) {
    cy.contains("label", "User Role")
      .parents()
      .eq(1)
      .contains(".oxd-select-text-input", value)
      .should(isExist ? "exist" : "not.exist");
    return this;
  }

  verifyDefultValueSelectedforStatusField(isExist: boolean, value: string) {
    cy.contains("label", "Status")
      .parents()
      .eq(1)
      .contains(".oxd-select-text-input", value)
      .should(isExist ? "exist" : "not.exist");
    return this;
  }

  verifyEmployeeNameErrorMessageTextIsCorrect(
    errorMessageText: string,
    isExist: boolean
  ) {
    cy.contains("label", "Employee Name")
      .parents()
      .eq(2)
      .contains("span", errorMessageText)
      .should(isExist ? "exist" : "not.exist");
    return this;
  }

  verifyUserRoleErrorMessageTextIsCorrect(
    errorMessageText: string,
    isExist: boolean
  ) {
    cy.contains("label", "User Role")
      .parents()
      .eq(2)
      .contains("span", errorMessageText)
      .should(isExist ? "exist" : "not.exist");

    return this;
  }

  verifyStatusErrorMessageTextIsCorrect(
    errorMessageText: string,
    isExist: boolean
  ) {
    cy.contains("label", "Status")
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

  checkUserNameIsExistInUserGred(userName: string, isExist: boolean) {
    cy.contains("div[role=row]", userName).should(
      isExist ? "exist" : "not.exist"
    );
    return this;
  }

  checkUserRoleIsExistInUserGred(
    userName: string,
    userRole: string,
    isExist: boolean
  ) {
    cy.contains("div[role=row]", userName)
      .contains("div", userRole)
      .should(isExist ? "exist" : "not.exist");
    return this;
  }

  checkEmployeeNameIsExistInUserGred(
    userName: string,
    employeeName: string,
    isExist: boolean
  ) {
    cy.contains("div[role=row]", userName)
      .contains("div", employeeName)
      .should(isExist ? "exist" : "not.exist");
    return this;
  }

  checkStatusIsExistInUserGred(
    userName: string,
    Status: string,
    isExist: boolean
  ) {
    cy.contains("div[role=row]", userName)
      .contains("div", Status)
      .should(isExist ? "exist" : "not.exist");
    return this;
  }

  verifyEmployeeDetailsPageOpen() {
    cy.location("pathname", { timeout: 10000 }).should(
      "eq",
      "/web/index.php/admin/viewSystemUsers"
    );
  }
}

export default AddUserPageAssertions;
