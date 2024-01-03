import { NewUser } from "./createData";
import { UserRole } from "./types";

export const createNewUserBody = (user: NewUser) => {
  return {
    ...user,
    status: user.status === "Enabled",
    userRoleId: UserRole[user.userRoleId],
  };
};
