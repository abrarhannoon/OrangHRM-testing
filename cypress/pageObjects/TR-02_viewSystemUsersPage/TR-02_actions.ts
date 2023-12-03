import {
  UserRole,
  UserStatus,
} from "@pageObjects/TR-02_addUserPage/TR-02_types";

class ViewSystemUsersPageActions {
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
      .get(".oxd-input--active")
      .type(userName);
    return this;
  }

  clickOnSearchButton() {
    cy.contains("button", "Search").click();
  }
}
export default ViewSystemUsersPageActions;
