import { useEffect, useState } from "react";

const withClientFetching = (Component, fetcherName: string) => {
  return function ClientComponent() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetch(`/api/data?component=${fetcherName}`)
        .then((res) => res.json())
        .then((result) => {
          if (result.error) throw new Error(result.error);
          setData(result);
        })
        .catch(setError)
        .finally(() => setLoading(false));
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return <Component data={data} />;
  };
};

export default withClientFetching;
