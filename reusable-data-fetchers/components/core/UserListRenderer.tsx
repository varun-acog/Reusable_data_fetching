import React from 'react';
import { User, WithDataProps } from '../../types';

const UserListRenderer: React.FC<WithDataProps<User>> = ({ data, isLoading, error }) => {
  if (isLoading) {
    return <div className="text-gray-800 dark:text-gray-100">Loading users...</div>;
  }

  if (error) {
    return <div className="text-red-600 dark:text-red-400">Error: {error}</div>;
  }

  if (!data || data.length === 0) {
    return <div className="text-gray-800 dark:text-gray-100">No users found.</div>;
  }

  return (
    <div className="user-list p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Users</h2>
      <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100">
            <th className="border border-gray-300 dark:border-gray-700 p-3">ID</th>
            <th className="border border-gray-300 dark:border-gray-700 p-3">Name</th>
            <th className="border border-gray-300 dark:border-gray-700 p-3">Email</th>
            <th className="border border-gray-300 dark:border-gray-700 p-3">Role</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
              <td className="border border-gray-300 dark:border-gray-700 p-3">{user.id}</td>
              <td className="border border-gray-300 dark:border-gray-700 p-3">{user.name}</td>
              <td className="border border-gray-300 dark:border-gray-700 p-3">{user.email}</td>
              <td className="border border-gray-300 dark:border-gray-700 p-3">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserListRenderer;
