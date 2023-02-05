import { useState } from "react";

const BASE_URL = "http://localhost:5000";

const SearchBarNew = ({ addZipCode, addProductName }) => {
  const [searchInput, setSearchInput] = useState("");
  const [searchInputProduct, setSearchInputProduct] = useState("");

  const handleChange = (e) => {
    setSearchInput(e.target.value);

  };
  const handleSubmit = (event) => {
    event.preventDefault();
    addZipCode(searchInput);
  };

  const handleOnChange = (event) => {
    setSearchInputProduct(event.target.value);

  };
  const handleOnSubmit = (ev) => {
    ev.preventDefault();
    addProductName(searchInputProduct);
  };

  return (
    <>
    
    <div className=" pl-12  items-center flex flex-col">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-control w-full max-w-xs">
          <label className="label-text">
            Search a location:
            <input
              className="input input-bordered w-full max-w-xs mt-2 items-center h-6"
              type="text"
              placeholder="zip code"
              onChange={(e) => handleChange(e)}
              value={searchInput}
            />
          </label>
        </div>
        <button type="submit" className="btn btn-outline btn-xs my-2">
          Search
        </button>{" "}
       
      </form>

{/* by product */}
      <form onSubmit={(ev) => handleOnSubmit(ev)}>
        <div className="">
        <div className="form-control w-full max-w-xs">
          <label className="label-text">
            Search a product:
            <input
              className="input input-bordered w-full max-w-xs mt-2 items-center h-6"
              type="text"
              placeholder="food item"
              onChange={(event) => handleOnChange(event)}
              value={searchInputProduct}
            />
          </label>
        </div>
        <button type="submit" className="btn btn-outline btn-xs my-2">
          Search
        </button>{" "}
        </div>
      </form>
      </div>

      
   
    
    </>
  );
};

export default SearchBarNew;
