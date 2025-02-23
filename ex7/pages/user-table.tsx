import UserTable from "../components/UserList";
import withClientFetching from "../hoc/withClientFetching";

export default withClientFetching(UserTable, "UserData");
