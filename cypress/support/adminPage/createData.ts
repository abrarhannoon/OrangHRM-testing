import { StatusType, UserRole } from "./types";

export interface NewUser {
  username: string;
  password: string;
  status: StatusType;
  userRoleId: keyof typeof UserRole;
  empNumber?: number;
}
