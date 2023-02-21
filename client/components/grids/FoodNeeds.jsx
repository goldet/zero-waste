import Card from "./Card";
import React, { useState, useEffect } from "react";
import SearchBarNew from "./SearchBarNew";

const BASE_URL = "http://localhost:5000";

//component that renders food that is needed
const FoodNeeds = () => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [filtProducts, setFiltProducts] = useState("");

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

  //get products that are needed
  useEffect(() => {
    const getProducts = async () => {
      /*  setIsLoading(true) */
      const response = await fetch(`${BASE_URL}/products?needed=true`);
      const data = await response.json();
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

  //delete's product
  const deleteProduct = async (id) => {
    try {
      await fetch(`${BASE_URL}/products/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(products),
      });
      const notDeleted = products.filter((product) => product.id != id);
      setProducts(notDeleted);
    } catch (error) {
      setError("Oops! Something went wrong. Try again later");
    }
  };

  return (
    <>
      <div className="page-container">
        <h1 className="text-3xl text-center md:text-start font-bold text-slate-700">
          Food Needs
        </h1>

        <SearchBarNew addZipCode={addZipCode} addProductName={addProductName} />

        <div className="parentContainer gap-10">
          {products &&
            !filtProducts &&
            products.map((product, index) => (
              <Card
                key={index}
                product={product}
                deleteProduct={deleteProduct}
              />
              /* openProductDetail={openProductDetail} */
              /* onClick={openProductDetail} */
            ))}
        </div>
        <div className="parentContainer gap-10">
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
                <Card
                  product={product}
                  deleteProduct={deleteProduct}
                  key={product.id}
                />
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
    </>
  );
};

export default FoodNeeds;
