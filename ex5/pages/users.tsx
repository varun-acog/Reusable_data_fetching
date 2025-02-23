import UserListRenderer from "../components/UserListRenderer";
import withClientFetching from "../hoc/withClientFetching";

export default withClientFetching<{ id: number; name: string }>(
    UserListRenderer,
    "UserData"
);
