import React, { useState, useEffect } from "react";
import SearchBarNew from "./SearchBarNew";

const BASE_URL = "http://localhost:5000";

const FoodAvailable = () => {
  /* const [isLoading, setIsLoading] = (false); */
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      /*  setIsLoading(true) */
      const response = await fetch(`${BASE_URL}/products?needed=false`); 
      const data = await response.json();
      const products = data.products.data;
      setProducts(products);
      /*  setIsLoading(false) */
    };
    getProducts();
  }, []);

  const deleteProduct = async (id) => {
    try {
      await fetch(`${BASE_URL}/products/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(products),
      });

      window.location.reload();
    } catch (error) {
      setError("Oops! Something went wrong. Try again later");
    }
  };

  return (
    <>
      <h1 className="text-4xl text-center pt-5 pb-10">Food to share!</h1>

      {products &&
        products.map((product) => (
          <div key={product.id}>
            <button
              className="deleteBtn"
              onClick={() => deleteProduct(product.id)}
            >
              {" "}
              <span role="img" aria-label="delete button">
                ✖️
              </span>
            </button>
            <span>
              <div className="container">
                {" "}
                Product: {product.name} <br /> Type: {product.type} <br />{" "}
                Description: <br /> {product.description} <br /> Amount:{" "}
                {product.amount} <br /> Contact {product.firstname}:{" "}
                {product.phone_number} <br /> Zip code: {product.zip_code}
              </div>
            </span>

          

          </div>
    
        ))}
     <h1>BY ZIP CODE</h1>
          <SearchBarNew />
    </>
  );
};

export default FoodAvailable;
