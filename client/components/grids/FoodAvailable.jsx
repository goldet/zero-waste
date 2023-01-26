import React, { useState, useEffect } from "react";


const BASE_URL = "http://localhost:5000";



const FoodAvailable = () => {

/* const [isLoading, setIsLoading] = (false); */
const [products, setProducts] = useState(null);
const [error, setError] = useState(null);


useEffect(() => {
  const getProducts = async () => {

   /*  setIsLoading(true) */
    const response = await fetch(`${BASE_URL}/products?needed=false`);  //?needed=false
    console.log(response);
    const data = await response.json();
    console.log(data)

    const products = data.products.data;
    setProducts(products)
   /*  setIsLoading(false) */
  

  };
  getProducts();
}, []);


  return (<>
  
  <h1 className="text-4xl text-center pt-5 pb-10">Food to share!</h1>

  {/* <div  className="list "> */}
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
                 <div className="container"> {product.name} <br/> {product.description} <br/> Amount: {product.amount} <br/> {product.firstname}'s number: {product.phone_number} <br/> {product.zip_code}   {/* m-0 border-solid  text-center pt-6 */}
                 </div> 
                </span>
               
              </div>
            ))}
       {/*  </div> */}
    

  </>
)};

export default FoodAvailable;
