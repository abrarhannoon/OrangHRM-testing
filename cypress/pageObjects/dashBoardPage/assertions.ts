class HomePageAssertions {
  checkDashboardTitleIsExist(isExist: boolean) {
    cy.contains("h6", "Dashboard").should(isExist ? "exist" : "not.exist");
    return this;
  }

  checkDashbordIsOpen(value: boolean) {
    cy.url().should("include", "dashboard/index");
    return this;
  }
}
export default HomePageAssertions;
