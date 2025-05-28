import React, { createContext, useEffect, useState } from 'react'

export const product =createContext();

const Products = ({children}) => {
    const [products, setProducts] = useState([]);
    const [cart,setCart]=useState([]);
      useEffect(() => {
        async function fetchProducts() {
          try {
            const res = await fetch("/products.json"); // ✅ Correct path
            const data = await res.json();
            setProducts(data);
          } catch (error) {
            console.error("Error fetching products:", error);
          }
        }
    
        fetchProducts();
      }, []);
      console.log(products);
      
  return (
    <product.Provider value={{cart,setCart,products}}>
        {children}
    </product.Provider>
  )
}

export default Products