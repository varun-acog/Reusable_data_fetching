import { GetServerSideProps } from "next";

const withServerFetching = (Component: any, fetcherName: string) => {
  const ServerComponent = (props: any) => <Component {...props} />;

  export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch(`http://localhost:3000/api/data?component=${fetcherName}`);
    const data = await res.json();

    if (data.error) {
      return { notFound: true };
    }

    return { props: { data } };
  };

  return ServerComponent;
};

export default withServerFetching;
