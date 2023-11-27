import LoginPageActions from "@pageObjects/loginPage/actions";
import "@testing-library/cypress/add-commands";
import "cypress-file-upload";
import "cypress-wait-until";
declare global {
  namespace Cypress {
    interface Chainable {
      login(): void;
    }
  }
}

Cypress.Commands.add("login", () => {
  cy.visit("/auth/login");
  cy.get('input[name="username"]').type("Admin");
  cy.get('input[name="password"]').type("admin123");
  cy.get('button[type="submit"]').click();
});
