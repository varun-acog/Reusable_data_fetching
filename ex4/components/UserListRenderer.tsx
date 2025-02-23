type User = { id: number; name: string };

const UserListRenderer = ({ data }: { data: User[] }) => (
    <ul>
        {data.map((user) => (
            <li key={user.id}>{user.name}</li>
        ))}
    </ul>
);

export default UserListRenderer;
