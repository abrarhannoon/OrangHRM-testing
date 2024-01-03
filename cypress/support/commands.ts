import LoginPageActions from "@pageObjects/loginPage/actions";
import "@testing-library/cypress/add-commands";
import "cypress-file-upload";
import "cypress-wait-until";
import { PASSWORD, USER_NAME } from "./constants";
declare global {
  namespace Cypress {
    interface Chainable {
      login(username?: string, password?: string): void;
    }
  }
}

Cypress.Commands.add("login", (username = USER_NAME, password = PASSWORD) => {
  cy.visit("/auth/login");
  cy.get('input[name="username"]').clear().type(username);
  cy.get('input[name="password"]').clear().type(password);
  cy.get('button[type="submit"]').click();
});
