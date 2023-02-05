import React, { useState, useEffect } from "react";
import SearchBarNew from "./SearchBarNew";

const BASE_URL = "http://localhost:5000";

const FoodAvailable = () => {
  /* const [isLoading, setIsLoading] = (false); */
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  //state to hold the products with the matching zip code
  const [zipCodeProducts, setZipCodeProducts] = useState(null);
  //state to hold the products with matching searched names
  const [productName, setProductName] = useState(null);

  //add function to add the zip code to this component
  const addZipCode = (searchInput) => {
    getProductByZipCode(searchInput);
  };

  const getProductByZipCode = async (searchInput) => {
    const response = await fetch(
      `${BASE_URL}/products?zip_code=${searchInput}`
    );
    console.log(response);
    const data = await response.json();
    console.log(data);
    const products = data.product;
    setZipCodeProducts(products);
  };

  const addProductName = (searchInputProduct) => {
    getProductByName(searchInputProduct);
  };

  const getProductByName = async (searchInputProduct) => {
    const response = await fetch(
      `${BASE_URL}/products?needed=false&name=${searchInputProduct}`
    ); /* figure out how to to search by productAND needed === false */
    console.log(response);
    const data = await response.json();
    console.log(data);
    const products = data.product;
    setProductName(products);
  };

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
         <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1673097628302-94de4461704c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=782&q=80")` }}>
         <div className="hero-overlay bg-opacity-30 md:bg-opacity-60 lg:bg-opacity-60"></div>
         <div className="text-center text-neutral-content">
      <h1 className="text-3xl text-center pt-5 pb-5 font-bold">Food to share</h1>

      {/*  search bar with ternary operator to show either just the zip codes or all products  */}

     <div className="collapse"> 
     <input type="checkbox" className="peer" /> 
     <div className="collapse-title  pl-16 text-lg">
     Click to search by product or location</div>
     <div className="collapse-content  peer-checked: peer-checked:">
     <SearchBarNew addZipCode={addZipCode} addProductName={addProductName} /> 
     </div>
     </div> 
      
      <div className="parentContainer gap-10 ">  {/* grid grid-cols-1 md:grid md:grid-cols-3 md:m-10 md:gap-52 lg:grid lg:grid-cols-3 lg:gap-40 lg:m-10 */}
        {(() => {
          
          if (zipCodeProducts === null && productName === null && products) {
            return products.map((product) => (
              <div className="" key={product.id}>
                <span>

             

                
                  <div style={{ backgroundImage: `url("https://images.unsplash.com/photo-1454944338482-a69bb95894af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ymxha2MlMjBhbmQlMjB3aGl0ZSUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60")` }} className="container card w-80 h-96 justify-center text-start bg-base-100 shadow-xl mb-6 card-body text-black ">
                   
                    {" "}

                 
                    <div className="card-actions justify-end">
                      <button
                        className="deleteBtn btn2 h-10 w-10 bg-none "
                        onClick={() => deleteProduct(product.id)}
                      >
                        {" "}
                        <span role="img" aria-label="delete button">
                          ✖️
                        </span>
                      </button>
                    </div>
        
                    <h1 className="card-title">Product: {product.name}</h1>{" "}
                    <br /> Type: {product.type} <br /> Description: <br />{" "}
                    {product.description} <br /> Amount: {product.amount} <br />{" "}
                    Contact {product.firstname}: {product.phone_number} <br />{" "}
                    <div className="">Zip code: {product.zip_code} </div>
                  </div>
                </span>
                
              </div>
              
              
            ));
            
          } else if (productName && !zipCodeProducts) {
            return productName.map((product) => (
              <div key={product.id}>
                  <div style={{ backgroundImage: `url("https://images.unsplash.com/photo-1454944338482-a69bb95894af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ymxha2MlMjBhbmQlMjB3aGl0ZSUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60")` }} className="container card w-80 h-96 m-auto justify-center text-start m-auto bg-base-100 shadow-xl  mb-6 card-body text-black ">
                  {" "}
                  <h1 className="card-title">Product: {product.name}</h1> <br /> Type: {product.type} <br />{" "}
                  Description: <br /> {product.description} <br /> Amount:{" "}
                  {product.amount} <br /> Contact {product.firstname}:{" "}
                  {product.phone_number} <br /> Zip code: {product.zip_code}
                </div>
              </div>
            ));
          } else if (zipCodeProducts && !productName) {
            return zipCodeProducts.map((product) => (
              <div key={product.id}>
                  <div style={{ backgroundImage: `url("https://images.unsplash.com/photo-1454944338482-a69bb95894af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ymxha2MlMjBhbmQlMjB3aGl0ZSUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60")` }} className="container card w-80 h-96 justify-center text-start m-auto bg-base-100 shadow-xl  mb-6 card-body text-black ">
                  {" "}
                  <h1 className="card-title">Product: {product.name} </h1> <br /> Type: {product.type} <br />{" "}
                  Description: <br /> {product.description} <br /> Amount:{" "}
                  {product.amount} <br /> Contact {product.firstname}:{" "}
                  {product.phone_number} <br /> Zip code: {product.zip_code}
                </div>
              </div>
              
            ));
            
          }
           
        })()}
      </div>
      </div>
      </div>
    </>
  );
};

export default FoodAvailable;
