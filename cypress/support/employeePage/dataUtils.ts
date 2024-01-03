import { createNewEmployeeBody } from "./constants";
import { NewEmployee } from "./createDataType";

class EmployeePageDataUtils {
  createNewEmployee = (employee: NewEmployee) => {
    this.deleteEmployeeByEmployeeId(employee.employeeId);
    return cy
      .request("POST", "api/v2/pim/employees", createNewEmployeeBody(employee))
      .then((response) => response.body.data.empNumber);
  };

  getEmployeeByEmployeeId = (employeeId: string) => {
    return cy
      .request("GET", `api/v2/pim/employees?employeeId=${employeeId}`)
      .then((response) => {
        expect(response.status).to.equal(200);
        return response.body.data[0];
      });
  };

  deleteEmployeeByEmployeeId = (employeeId: string) => {
    this.getEmployeeByEmployeeId(employeeId).then((employee) => {
      employee.empNumber &&
        cy.request({
          method: "DELETE",
          url: "api/v2/pim/employees",
          body: {
            ids: [employee.empNumber],
          },
        });
    });
  };
}

export default EmployeePageDataUtils;
