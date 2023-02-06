import Card from "./Card";
import React, { useState, useEffect } from "react";
import SearchBarNew from "./SearchBarNew";

const BASE_URL = "http://localhost:5000";

const FoodNeeds = () => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);

  const [filtProducts, setFiltProducts] = useState("");

  //add function to add the zip code to this component
  const addZipCode = (searchInput) => {
    const filterProdsZip = products.filter(
      (product) => product.zip_code === searchInput
    );
    setFiltProducts(filterProdsZip);
  };

  const addProductName = (searchInputProduct) => {
    const filterProds = products.filter(
      (product) =>
        product.name.toLowerCase() === searchInputProduct.toLowerCase()
    );
    setFiltProducts(filterProds);
  };

  useEffect(() => {
    const getProducts = async () => {
      /*  setIsLoading(true) */
      const response = await fetch(`${BASE_URL}/products?needed=true`);
      console.log(response);
      const data = await response.json();
      console.log(data);

      const products = data.products.data;

      setProducts(products);
      /*  setIsLoading(false) */
    };
    getProducts();
  }, []);

  const handleOnClick = (event) => {
    event.preventDefault();
    setFiltProducts("");
    setProducts(products);
  };

  const deleteProduct = async (id) => {
    try {
      await fetch(`${BASE_URL}/products/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(products),
      });
      const notDeleted = products.filter(
        (product) =>
          product.id != id
      );
     setProducts(notDeleted)
     /*  window.location.reload(); */
    } catch (error) {
      setError("Oops! Something went wrong. Try again later");
    }
  };

  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1673097628302-94de4461704c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=782&q=80")`,
        }}
      >
        <div className="hero-overlay bg-opacity-30 md:bg-opacity-60 lg:bg-opacity-60"></div>
        <div className="text-center text-neutral-content">
          <h1 className="text-3xl text-center pt-5 pb-5 font-bold pl-8">
            Food Needs
          </h1>

          <div className="collapse">
            <input type="checkbox" className="peer" />
            <div className="collapse-title  pl-20 text-lg">
              Click to search by product or location
            </div>
            <div className="collapse-content  peer-checked: peer-checked:">
              <SearchBarNew
                addZipCode={addZipCode}
                addProductName={addProductName}
              />
            </div>
          </div>

          <div className="parentContainer gap-10">
            {products &&
              !filtProducts &&
              products.map((product) => <Card product={product} deleteProduct={deleteProduct}/>)}
          </div>
          <div className="parentContainer gap-10">
            {" "}
            {filtProducts && filtProducts.length === 0 && (
              <div className="ml-8 alert alert-error shadow-lg">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current flex-shrink-0 h-6 w-6 "
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="">
                    There are no items that match this search!
                  </span>
                </div>
                <btn
                  onClick={(event) => handleOnClick(event)}
                  href="/grids/foodneeds"
                  className="btn"
                >
                  Go Back
                </btn>
              </div>
            )}
            {filtProducts && filtProducts.length > 0 && (
              <>
                {filtProducts.map((product) => (
                  <Card product={product} deleteProduct={deleteProduct}/>
                ))}
                <div className="">
                  <btn
                    onClick={(event) => handleOnClick(event)}
                    href="/grids/foodneeds"
                    className="btn w-32 "
                  >
                    Go Back
                  </btn>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodNeeds;
