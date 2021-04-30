import React from "react";
import UserService from "../services/userService";

class UserComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    UserService.getUsers().then((response) => {
      this.setState({ users: response.data });
    });
  }

  render() {
    return (
      <div className="container-lg">
        <h1 className="text-center mt-5">All Users</h1>
        <table className="table table-striped text-left m-5">
          <thead>
            <tr className="font-weight-bold">
              <td>User Id</td>
              <td>User First Name</td>
              <td>User Last Name</td>
              <td>User Email</td>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserComponent;
