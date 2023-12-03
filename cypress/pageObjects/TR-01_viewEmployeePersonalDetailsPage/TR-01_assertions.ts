class ViewPersonalDetailsPageAssertions {
  VerifyEmployeeIdIsCorrect(isExist: boolean, employeeId: string) {
    cy.contains("label", "Employee Id")
      .parents()
      .eq(1)
      .find("input")
      .should(isExist ? "exist" : "not.exist")
      .invoke("val")
      .should("eq", employeeId);

    return this;
  }
}

export default ViewPersonalDetailsPageAssertions;
