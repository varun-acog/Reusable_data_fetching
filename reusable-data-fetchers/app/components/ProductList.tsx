import ProductListRenderer from '../../components/core/ProductListRenderer';
import withServerFetching from '../../hoc/withServerFetching';
import { Product } from '../../types';

// Import the fetcher to ensure it's registered
import '../../fetchers/ProductDataFetcher';

/**
 * Server-side fetched ProductList component
 * Uses the withServerFetching HOC to handle data fetching
 */
const ProductList = withServerFetching<Product, any>(ProductListRenderer, 'ProductList');

export default ProductList;