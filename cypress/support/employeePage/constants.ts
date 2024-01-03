import { NewEmployee } from "./createDataType";

export const createNewEmployeeBody = (employee: NewEmployee) => {
  return {
    firstName: employee.firstName,
    lastName: employee.lastName,
    employeeId: employee.employeeId,
    middleName: employee.middleName,
    empPicture: employee.empPicture,
  };
};
