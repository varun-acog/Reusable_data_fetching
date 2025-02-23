import { GetServerSideProps } from "next";

const withServerFetching = <T,>(Component: React.FC<{ data: T[] }>, fetcher: { fetchData: () => Promise<T[]> }) => {
    const ServerComponent = (props: { data: T[] }) => <Component data={props.data} />;

    export const getServerSideProps: GetServerSideProps = async () => {
        const data = await fetcher.fetchData();
        return { props: { data } };
    };

    return ServerComponent;
};

export default withServerFetching;
