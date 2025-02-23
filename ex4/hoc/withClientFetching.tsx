import { useEffect, useState, ComponentType } from "react";

const withClientFetching = <T,>(
    Component: ComponentType<{ data: T[] }>,
    fetcher: { fetchData: () => Promise<T[]> }
) => {
    return function ClientComponent() {
        const [data, setData] = useState<T[]>([]);

        useEffect(() => {
            fetcher.fetchData().then(setData);
        }, []);

        return <Component data={data} />;
    };
};

export default withClientFetching;
