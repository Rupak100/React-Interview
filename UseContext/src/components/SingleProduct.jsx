import React, { useContext } from 'react';
import { product } from '../Context/Products';

const SingleProduct = ({ products }) => {
  const { name, price, image } = products;
  const {cart,setCart}=useContext(product);

  const addToCart = () => {
    setCart([...cart, products]);
  };

  const removeFromCart = () => {
    setCart(cart.filter(item => item.id !== products.id));
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "1rem",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        backgroundColor: "#fff",
      }}
    >
      <img
        src={image}
        alt={name}
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
          borderRadius: "4px",
          marginBottom: "1rem",
        }}
      />
      <h4>{name}</h4>
      <p style={{ fontWeight: "bold" }}>${price}</p>
      {cart?.some(p => p.id === products.id) ? (
        <button onClick={removeFromCart}>Remove from Cart</button>
      ) : (
        <button onClick={addToCart}>Add to Cart</button>
      )}
    </div>
  );
};

export default SingleProduct;
