import { useSearchParams } from 'react-router-dom';

const allProducts = [
  { id: 1, name: 'Running Shoes', category: 'shoes' },
  { id: 2, name: 'Leather Boots', category: 'shoes' },
  { id: 3, name: 'Graphic T-Shirt', category: 'clothes' },
  { id: 4, name: 'Denim Jacket', category: 'clothes' },
  { id: 5, name: 'Laptop', category: 'electronics' },
];

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get('category');

  const filteredProducts = category
    ? allProducts.filter(p => p.category === category)
    : allProducts;

  const handleCategoryChange = (category) => {
    if (category) {
      setSearchParams({ category });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Product List</h2>
      <div style={{ marginBottom: '1rem' }}>
        <button onClick={() => handleCategoryChange('shoes')}>Shoes</button>
        <button onClick={() => handleCategoryChange('clothes')}>Clothes</button>
        <button onClick={() => handleCategoryChange('electronics')}>Electronics</button>
        <button onClick={() => handleCategoryChange(null)}>All</button>
      </div>

      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>
            {product.name} - <i>{product.category}</i>
          </li>
        ))}
      </ul>
    </div>
  );
}
