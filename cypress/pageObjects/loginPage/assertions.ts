class LoginPageAssertions {
  verifyLoginPageUrl() {
    cy.url().should("include", "/auth/login");
    return this;
  }

  verifyPageTitle() {
    cy.contains("h5", "Login").should("exist");
    return this;
  }

  checkUserNameInputFieldIsExist(isExist: boolean) {
    cy.get('input[name="username"]').should(isExist ? "exist" : "not.exist");
    return this;
  }

  checkPasswordInputFieldIsExist(isExist: boolean) {
    cy.get('input[name="password"]').should(isExist ? "exist" : "not.exist");
    return this;
  }

  checkLoginButtonIsExist(isExist: boolean) {
    cy.get('button[type="submit"]').should(isExist ? "exist" : "not.exist");
    return this;
  }

  checkPasswordErrorMessageText(value: string, isExist: boolean) {
    cy.contains("label", "Password")
      .parents()
      .eq(1)
      .contains("span", value)
      .should(isExist ? "exist" : "not.exist");
    return this;
  }

  checkUserNameErrorMessageText(value: string, isExist: boolean) {
    cy.contains("label", "Username")
      .parents()
      .eq(1)
      .contains("span", value)
      .should(isExist ? "exist" : "not.exist");
    return this;
  }

  checkInvalidCredentialsErrorMessageIsDisplayed(errorMessageText: string) {
    cy.get(".oxd-alert-content-text")
      .should("exist")
      .and("have.text", errorMessageText);
  }
}

export default LoginPageAssertions;
