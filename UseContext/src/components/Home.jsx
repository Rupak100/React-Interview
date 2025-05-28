// import React, { useEffect, useState} from 'react';
import { useContext } from 'react';
import SingleProduct from './SingleProduct';
import { product } from '../Context/Products';

const Home = () => {
//     const [products, setProducts] = useState([]);
//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//         const res = await fetch("/products.json"); // ✅ Correct path
//         const data = await res.json();
//         setProducts(data);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     }

//     fetchProducts();
//   }, []);



// using context api
  const {products} =useContext(product);
  

  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Product List</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {products.map((prod) => (
          <SingleProduct products={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
