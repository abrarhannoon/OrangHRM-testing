class LoginPageActions {
  openLoginPage() {
    cy.visit("/auth/login");
  }

  typeInUsernameInputField(username: string): void {
    cy.get('input[name="username"]').type(username);
  }

  typeInPasswordInputField(password: string): void {
    cy.get('input[name="password"]').type(password);
  }

  clickOnLoginButton(): void {
    cy.get('button[type="submit"]').click();
  }
}

export default LoginPageActions;
