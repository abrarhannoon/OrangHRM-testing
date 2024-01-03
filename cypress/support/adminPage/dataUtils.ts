import { createNewUserBody } from "./constants";
import { NewUser } from "./createData";

class UserPageDataUtils {
  createNewUser = (user: NewUser) => {
    return cy
      .request("POST", "api/v2/admin/users", createNewUserBody(user))
      .then((response) => {
        return response.body.data.empNumber;
      });
  };

  getUserByUserName = (userName: string) => {
    const getUserApiUrl = `api/v2/admin/users?username=${userName}`;

    return cy.request("GET", getUserApiUrl).then((response) => {
      return response.body.data[0];
    });
  };

  deleteUserByUserName = (userName: string) => {
    this.getUserByUserName(userName).then((user) => {
      if (user.id) {
        return cy.request({
          method: "DELETE",
          url: `api/v2/admin/users`,
          body: {
            ids: [user.id],
          },
        });
      }
    });
  };
}

export default UserPageDataUtils;
