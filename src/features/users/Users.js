import React from "react";
import { useSelector } from "react-redux";


function Users() {

  const users = useSelector((store) => store.users);

  return (
    <div>
      <h1>Total Users: {users.length}</h1>
      <ul>
        Users!
        {users.map((user, i) => {
          return <li key={i}>{user.username} - {user.hometown}</li>;
        })}
        {/* Write code here that displays the usernames of all users in the Redux store */}
        {/* In addition, display the total number of users curently in the store */}
      </ul>
    </div>
  );
}

export default Users;
