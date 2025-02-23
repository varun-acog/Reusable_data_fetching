import { useEffect, useState } from "react";
import { BaseFetcher } from "../lib/BaseFetcher";

const fetcher = new BaseFetcher<{ id: number; name: string }>("/data/users.json");

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    //@ts-expect-error
    fetcher.fetchData().then(setUsers);
  }, []);

  return (
    <ul>
      {users.map((user) => (
        //@ts-expect-error
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
