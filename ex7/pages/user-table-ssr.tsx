import UserTable from "../components/UserTable";
import fs from "fs";
import path from "path";

export default function UserTableSSR({ data }) {
    return <UserTable data={data} />;
}

// Fetches data on the server (SSR)
export async function getServerSideProps() {
    const filePath = path.join(process.cwd(), "public/data/users.json");
    const jsonData = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(jsonData);

    return {
        props: { data },
    };
}
