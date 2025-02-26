'use client';

import UserListRenderer from '../../components/core/UserListRenderer';
import withClientFetching from '../../hoc/withClientFetching';
import { User } from '../../types';

// Import the fetcher to ensure it's registered
import '../../fetchers/UserDataFetcher';

/**
 * Client-side fetched UserList component
 * Uses the withClientFetching HOC to handle data fetching
 */
const UserList = withClientFetching<User, any>(UserListRenderer, 'UserList');

export default UserList;