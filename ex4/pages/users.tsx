import UserListRenderer from "../components/UserListRenderer";
import { UserDataFetcher } from "../fetchers/UserDataFetcher";
import withClientFetching from "../hoc/withClientFetching";

export default withClientFetching<{ id: number; name: string }>(
    UserListRenderer,
    new UserDataFetcher()
);
