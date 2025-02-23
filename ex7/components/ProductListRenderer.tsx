type Product = { id: number; name: string };

const ProductListRenderer = ({ data }: { data: Product[] }) => (
    <ul>
        {data.map((product) => (
            <li key={product.id}>{product.name}</li>
        ))}
    </ul>
);

export default ProductListRenderer;
