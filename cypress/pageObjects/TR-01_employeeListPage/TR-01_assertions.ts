class EmployeeListPageAssertions {
  checkEmployeeListPageIsContainEmployeeId(
    isExist: boolean,
    employeeId: string
  ) {
    cy.contains("div", employeeId).should(isExist ? "exist" : "not.exist");
    return this;
  }
}

export default EmployeeListPageAssertions;
