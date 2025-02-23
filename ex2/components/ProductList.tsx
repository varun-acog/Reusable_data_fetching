import { useEffect, useState } from "react";
import { BaseFetcher } from "../lib/BaseFetcher";

const fetcher = new BaseFetcher<{ id: number; name: string }>("/data/products.json");

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    //@ts-expect-error
    fetcher.fetchData().then(setProducts);
  }, []);

  return (
    <ul>
      {products.map((product) => (
        //@ts-expect-error
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
};

export default ProductList;
