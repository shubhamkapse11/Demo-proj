import { useEffect, useState } from "react";

function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      const data = await response.json();

      setUsers(data);
    }

    fetchUsers();
  }, []);


  return (

    <>

     { users.length < 0 ? <div>Loading...</div> : <div>
        {users.map(user => (
            <p key={user.id}>{user.name}</p>
        ))}
     </div> }
    </>
  );
}

export default User;
