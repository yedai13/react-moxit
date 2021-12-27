import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function Users(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const restult = await axios("https://jsonplaceholder.typicode.com/users");
      setUsers(restult.data);
    }
    getUsers();
  });
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id.toString()}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
