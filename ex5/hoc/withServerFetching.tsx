// hoc/withServerFetching.tsx
import { FetcherRegistry } from "../lib/FetcherRegistry";
import { ComponentType } from "react";

const withServerFetching = async <T,>(
    Component: ComponentType<{ data: T[] }>,
    fetcherName: string
) => {
    const fetcher = FetcherRegistry.getFetcher(fetcherName);
    if (!fetcher) {
        throw new Error(`Fetcher ${fetcherName} not found in registry.`);
    }

    const data = await fetcher.fetchData();

    return function ServerComponent() {
        return <Component data={data} />;
    };
};

export default withServerFetching;
