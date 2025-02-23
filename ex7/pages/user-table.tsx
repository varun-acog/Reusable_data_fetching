import UserTable from "../components/UserTable";
import withClientFetching from "../hoc/withClientFetching";

export default withClientFetching(UserTable, "UserData");
