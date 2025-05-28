import React, { useContext } from 'react';
import SingleProduct from './SingleProduct';
import { product } from '../Context/Products';

export const Cart = () => {
    const {cart}=useContext(product);
  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Cart Items</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {cart.map(prod => (
          <SingleProduct
            products={prod}
            key={prod.id}
          />
        ))}
      </div>
    </div>
  );
};
