const UserListRenderer = ({ users }: { users: { id: number; name: string }[] }) => (
    <ul>
        {users.map((user) => (
            <li key={user.id}>{user.name}</li>
        ))}
    </ul>
);

export default UserListRenderer;
