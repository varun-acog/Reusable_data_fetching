import ProductListRenderer from "../components/ProductListRenderer";
import withClientFetching from "../hoc/withClientFetching";

export default withClientFetching<{ id: number; name: string }>(
    ProductListRenderer,
    "ProductData"
);
