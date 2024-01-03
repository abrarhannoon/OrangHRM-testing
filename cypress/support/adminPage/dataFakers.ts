import { getPrefix } from "@support/shared/utils";
import { NewUser } from "./createData";
import { UserRole } from "./types";

export const getUser = (prefix: string = getPrefix()): NewUser => {
  return {
    username: `User ${prefix}`,
    password: `CypressPassword${prefix}`,
    userRoleId: "Admin",
    status: "Enabled",
  };
};
