import React, { useState, useEffect } from "react";
import Card from "./Card";
import SearchBarNew from "./SearchBarNew";
import services from "../services";

const BASE_URL = "http://localhost:5000";

const FoodAvailable = () => {
  const [isLoading, setIsLoading] = useState(false);
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

  //get products that are to share
  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true);
      const data = await services.productService.fetchAllFalse();
      const products = data.products.data;
      setProducts(products);
      setIsLoading(false);
    };
    getProducts();
  }, []);

  const handleOnClick2 = (e) => {
    e.preventDefault();
    setFiltProducts("");
    setProducts(products);
  };

  const deleteProduct = async (id) => {
    try {
      await services.productService.delete(id); 
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
          Food to share
        </h1>

        <SearchBarNew addZipCode={addZipCode} addProductName={addProductName} />

        {isLoading && <button className="btn loading">loading</button>}
        {error && (
          <div className="alert alert-error shadow-lg">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
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
              <span>{error}</span>
            </div>
          </div>
        )}

        <div className="parentContainer gap-10">
          {products &&
            !filtProducts &&
            products.map((product, index) => (
              <Card
                key={index}
                product={product}
                deleteProduct={deleteProduct}
              />
            ))}
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
                onClick={(e) => handleOnClick2(e)}
                href="/grids/foodavailable"
                className="btn"
              >
                BACK
              </btn>
            </div>
          )}
        </div>

        {filtProducts && filtProducts.length > 0 && (
          <>
            <div className="">
              <btn
                onClick={(e) => handleOnClick2(e)}
                href="/grids/foodavailable"
                className="back-link pl-2"
              >
                BACK
              </btn>
            </div>
            <div className="parentContainer gap-10">
              {filtProducts.map((product) => (
                <Card product={product} deleteProduct={deleteProduct} />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default FoodAvailable;
