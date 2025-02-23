import { useEffect, useState } from "react";

const withClientFetching = (WrappedComponent, dataKey) => {
  return function WithClientFetchingComponent(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch(`/api/data?component=${dataKey}`);
          if (!response.ok) throw new Error("Failed to fetch data");
          const result = await response.json();
          setData(result);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
      fetchData();
    }, []);

    return <WrappedComponent {...props} data={data} />;
  };
};

export default withClientFetching;
