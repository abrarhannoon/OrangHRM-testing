class ViewSystemUsersPageAssertions {
  checkUserGredIsContainCorrectUserName(isExist: boolean, userName: string) {
    cy.contains("div", userName).should(isExist ? "exist" : "not.exist");
    return this;
  }

  checkUserGredIsContainCorrectUserRole(isExist: boolean, userRole: string) {
    cy.contains("div", userRole).should(isExist ? "exist" : "not.exist");
    return this;
  }

  checkUserGredIsContainCorrectEmployeeName(
    isExist: boolean,
    employeeName: string
  ) {
    cy.contains("div", employeeName).should(isExist ? "exist" : "not.exist");
    return this;
  }

  checkUserGredIsContainCorrectStatus(isExist: boolean, Status: string) {
    cy.contains("div", Status).should(isExist ? "exist" : "not.exist");
    return this;
  }
}

export default ViewSystemUsersPageAssertions;
