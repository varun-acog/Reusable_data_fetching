import { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState<{ id: number; name: string }[]>([]);

  useEffect(() => {
    fetch("/data/users.json")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;

