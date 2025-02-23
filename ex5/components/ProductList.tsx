import { useEffect, useState } from "react";
import ProductListRenderer from "./ProductListRenderer";
import { ProductDataFetcher } from "../fetchers/ProductDataFetcher";

const fetcher = new ProductDataFetcher();

const ProductList = () => {
  const [products, setProducts] = useState<{ id: number; name: string }[]>([]);

  useEffect(() => {
    fetcher.fetchData().then(setProducts);
  }, []);

  return <ProductListRenderer products={products} />;
};

export default ProductList;
