import { UserRole, UserStatus } from "./TR-02_types";

class AddUserPageActions {
  openAddUserPage() {
    cy.visit("admin/saveSystemUser");
    return this;
  }

  clickOnDropdownArrowToShowUserRoleOptions() {
    cy.contains("label", "User Role")
      .parents()
      .eq(1)
      .find(".oxd-select-text--arrow")
      .click();
    return this;
  }
  clickOnDropdownArrowToShowStatusOptions() {
    cy.contains("label", "Status")
      .parents()
      .eq(1)
      .find(".oxd-select-text--arrow")
      .click();
    return this;
  }

  selectUserRoleFromDropdown(userRole: string = UserRole.SELECT) {
    this.clickOnDropdownArrowToShowUserRoleOptions();

    cy.contains("label", "User Role")
      .parents()
      .eq(1)
      .contains("div", userRole)
      .click();
    return this;
  }

  selectStatusFromDropdown(status: string = UserStatus.SELECT) {
    this.clickOnDropdownArrowToShowStatusOptions();

    cy.contains("label", "Status")
      .parents()
      .eq(1)
      .contains("div", status)
      .click();
    return this;
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

  typeInEmployeeNameInputFiled(employeeName: string) {
    cy.get('input[placeholder="Type for hints..."]')
      .type(employeeName)
      .wait(2000);

    return this;
  }

  clickOnSaveButton() {
    cy.contains("button", "Save").click({ timeout: 10000 });
  }

  clickOnCancleButton() {
    cy.contains("button", "Cancel").click();
  }

  typeInEmployeeNameInputFiledUsingAutoCompletOption(
    partialEmployeeName: string,
    fullEmpolyeeNameOption: string
  ) {
    this.typeInEmployeeNameInputFiled(partialEmployeeName);
    cy.contains("label", "Employee Name")
      .parents()
      .eq(2)
      .find('div[role="listbox"]')
      .as("employeeNameOptions");

    cy.get("@employeeNameOptions").should("be.visible");
    cy.get("@employeeNameOptions").contains(fullEmpolyeeNameOption).click();
  }
}

export default AddUserPageActions;
