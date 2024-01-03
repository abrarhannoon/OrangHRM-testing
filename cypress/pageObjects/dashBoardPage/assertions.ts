class HomePageAssertions {
  checkDashboardTitleIsExist(isExist: boolean) {
    cy.contains("h6", "Dashboard").should(isExist ? "exist" : "not.exist");
    return this;
  }

  checkDashbordIsOpen(value: boolean) {
    cy.url().should("include", "dashboard/index");
    return this;
  }

  verifyNavbarElementExistenceByText(value: string) {
    cy.get("ul.oxd-main-menu")
      .find("li.oxd-main-menu-item-wrapper")
      .contains("span", value)
      .should("exist");
    return this;
  }
}
export default HomePageAssertions;
