import { NewEmployee } from "@support/employeePage/createDataType";
import { getPrefix } from "@support/shared/utils";

export const getEmployee = (prefix: string = getPrefix()): NewEmployee => {
  return {
    firstName: `Cypress Employee ${prefix}`,
    lastName: `Cypress Employee ${prefix}`,
    middleName: `Cypress Employee ${prefix}`,
    employeeId: "0251774",
  };
};
