class LoginPageActions {
  openLoginPage() {
    cy.visit("/auth/login");
  }

  typeInUsernameInputField(username: string) {
    cy.get('input[name="username"]').clear().type(username);
    return this;
  }

  typeInPasswordInputField(password: string) {
    cy.get('input[name="password"]').clear().type(password);
    return this;
  }

  clickOnLoginButton() {
    cy.get('button[type="submit"]').click();
    return this;
  }
}

export default LoginPageActions;
