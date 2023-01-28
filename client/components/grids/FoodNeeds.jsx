import React, { useState, useEffect } from "react";

const BASE_URL = "http://localhost:5000";

const FoodNeeds= () => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  
  
  useEffect(() => {
    const getProducts = async () => {
  
     /*  setIsLoading(true) */
      const response = await fetch(`${BASE_URL}/products?needed=true`); 
      console.log(response);
      const data = await response.json();
      console.log(data)
  
      const products = data.products.data;
      setProducts(products)
     /*  setIsLoading(false) */
    
  
    };
    getProducts();
  }, []);
  
  return ( 
  <>
   <h1 className="text-2xl text-center pt-5">Food Needs!</h1>
   {products &&
            products.map(product => (
              <div key={product.id}>
                {/* <button
                  className="deleteBtn"
                  onClick={() => deleteProduct(product.id)}
                >
                  {" "}
                  <span role="img" aria-label="delete button">
                    ✖️
                  </span>
                </button> */}
                <span>
                 <div className="container"> {product.name} <br/> {product.type} <br/> {product.description} <br/> Amount: {product.amount} <br/> {product.firstname}'s number: {product.phone_number} <br/> {product.zip_code}   {/* m-0 border-solid  text-center pt-6 */}
                 </div> 
                </span>
               
              </div>
            ))}
  </>
  );
  };
  
  export default FoodNeeds;