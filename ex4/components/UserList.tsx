import { useEffect, useState } from "react";
import UserListRenderer from "./UserListRenderer";
import { UserDataFetcher } from "../fetchers/UserDataFetcher";

const fetcher = new UserDataFetcher();

const UserList = () => {
  const [users, setUsers] = useState<{ id: number; name: string }[]>([]);

  useEffect(() => {
    fetcher.fetchData().then(setUsers);
  }, []);

  return <UserListRenderer users={users} />;
};

export default UserList;
