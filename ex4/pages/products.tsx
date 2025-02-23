import ProductListRenderer from "../components/ProductListRenderer";
import { ProductDataFetcher } from "../fetchers/ProductDataFetcher";
import withClientFetching from "../hoc/withClientFetching";

export default withClientFetching<{ id: number; name: string }>(
    ProductListRenderer,
    new ProductDataFetcher()
);
