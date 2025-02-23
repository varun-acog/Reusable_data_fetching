// hoc/withClientFetching.tsx
import { useEffect, useState, ComponentType } from "react";
import { FetcherRegistry } from "../lib/FetcherRegistry";

const withClientFetching = <T,>(
    Component: ComponentType<{ data: T[] }>,
    fetcherName: string
) => {
    return function ClientComponent() {
        const [data, setData] = useState<T[]>([]);

        useEffect(() => {
            const fetcher = FetcherRegistry.getFetcher(fetcherName);
            if (fetcher) {
                fetcher.fetchData().then(setData).catch(console.error);
            } else {
                console.error(`Fetcher ${fetcherName} not found in registry.`);
            }
        }, []);

        return <Component data={data} />;
    };
};

export default withClientFetching;
