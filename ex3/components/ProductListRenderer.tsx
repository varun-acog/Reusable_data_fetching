const ProductListRenderer = ({ products }: { products: { id: number; name: string }[] }) => (
    <ul>
        {products.map((product) => (
            <li key={product.id}>{product.name}</li>
        ))}
    </ul>
);

export default ProductListRenderer;
