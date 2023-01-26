import React, { useState, useEffect } from "react";


const BASE_URL = "http://localhost:5000";



const FoodAvailable = () => {

/* const [isLoading, setIsLoading] = (false); */
const [products, setProducts] = useState(null);
const [error, setError] = useState(null);


useEffect(() => {
  const getProducts = async () => {
   /*  setIsLoading(true) */
    const response = await fetch(`${BASE_URL}/products`,); //?needed=false
    console.log(response);
    const data = await response.json();

    const products = data.products;
    setProducts(products)
   /*  setIsLoading(false) */
  

  };
  getProducts();
}, []);


  return (<>
  
  <h1 className="text-2xl text-center pt-5">Food to share!</h1>

  <ul className="list">
          {products &&
            products.map(product => (
              <li className="line" key={product.id}>
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
                  {product.firstname} {product.name} {product.type} {product.description} {product.amount} {product.phone_number} {product.zip_code} {product.needed}
                </span>
               
              </li>
            ))}
        </ul>
    

  </>
)};

export default FoodAvailable;
