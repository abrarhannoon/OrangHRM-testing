import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import HomePageAssertions from "@pageObjects/dashBoardPage/assertions";
import LoginPageActions from "@pageObjects/loginPage/actions";
import LoginPageAssertions from "@pageObjects/loginPage/assertions";

const loginPageActions = new LoginPageActions();
const loginPageAssertions = new LoginPageAssertions();
const homePageAssertions = new HomePageAssertions();

Given("User visits the login page", () => {
  loginPageActions.openLoginPage();
});

When("User types in the Username input field {string}", (username: string) => {
  loginPageActions.typeInUsernameInputField(username);
});

When("User types in the password input field {string}", (password: string) => {
  loginPageActions.typeInPasswordInputField(password);
});

When("User clicks on the login button", () => {
  loginPageActions.clickOnLoginButton();
});

Then("The dashboard should be opened", () => {
  homePageAssertions.checkDashbordIsOpen(true);
});

Then(
  "The navbar element should be existed with text {string}",
  (text: string) => {
    homePageAssertions.verifyNavbarElementExistenceByText(text);
  }
);

Then(
  "The invalid credentials error message should be displayed {string}",
  (errorMessage: string) => {
    loginPageAssertions.checkInvalidCredentialsErrorMessageIsDisplayed(
      errorMessage
    );
  }
);

Then(
  "The Username error message should be displayed with text {string}",
  (errorMessage: string) => {
    loginPageAssertions.checkUserNameErrorMessageText(errorMessage, true);
  }
);

Then(
  "The password error message is displayed with text {string}",
  (errorMessage: string) => {
    loginPageAssertions.checkPasswordErrorMessageText(errorMessage, true);
  }
);

Then("The login page URL should be verified", () => {
  loginPageAssertions.verifyLoginPageUrl();
});
