import { UserRole } from "../../../support/adminPage/types";

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

  selectUserRoleFromDropdown(userRole: string) {
    this.clickOnDropdownArrowToShowUserRoleOptions();

    cy.contains("label", "User Role")
      .parents()
      .eq(1)
      .contains("div", userRole)
      .click();
    return this;
  }

  selectStatusFromDropdown(status: string) {
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
    cy.get('input[placeholder="Type for hints..."]').type(employeeName);

    return this;
  }

  clickOnSaveButton() {
    cy.contains("button", "Save").click();
  }

  clickOnCancleButton() {
    cy.contains("button", "Cancel").click();
  }

  typeInEmployeeNameInputFiledUsingAutoCompletOption(
    firstName: string,
    lastName: string,
    middName?: string
  ) {
    cy.intercept("GET", "/web/index.php/api/v2/pim/employees?nameOrId=**").as(
      "getEmployees"
    );

    let employeeFullName: string = [firstName, middName, lastName]
      .filter(Boolean)
      .join(" ");
    this.typeInEmployeeNameInputFiled(employeeFullName);

    cy.wait("@getEmployees").then((interception) => {
      const { response } = interception;
      cy.wrap(response.statusCode).should("eq", 200);
    });

    cy.contains("label", "Employee Name")
      .parents()
      .eq(2)
      .find('div[role="listbox"]')
      .contains(employeeFullName, { timeout: 10000 })
      .click();
  }

  clickOnSearchButton() {
    cy.contains("button", "Search").click({ force: true });
  }
}

export default AddUserPageActions;
