class EmployeeListPageActions {
  typeInEmployeeIdInputFiled(employeeId: string) {
    cy.contains("label", "Employee Id")
      .parents()
      .eq(1)
      .find("input")
      .clear()
      .type(`${employeeId}`);
    return this;
  }

  clickOnSearchButton() {
    cy.contains("button", " Search ").invoke("click");
  }
}
export default EmployeeListPageActions;
