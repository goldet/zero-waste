import { useState } from "react";
import { FiSearch } from "react-icons/fi";

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
    setSearchInput("");
  };

  const handleOnChange = (event) => {
    setSearchInputProduct(event.target.value);
  };
  const handleOnSubmit = (ev) => {
    ev.preventDefault();
    addProductName(searchInputProduct);
    setSearchInputProduct("");
  };

  return (
    <>
      <div className="form-control-search">
       
      
        <form onSubmit={(e) => handleSubmit(e)}>
  
          <label className="label-text relative">
            <input
              className="searchbar-input" 
              type="text"
              placeholder="search a zip code"
              onChange={(e) => handleChange(e)}
              value={searchInput}
            />
            <button type="submit" className="absolute left-2 top-10">
              <FiSearch />
            </button>
          </label>
         
        </form>
        
        {/* by product */}
        <form onSubmit={(ev) => handleOnSubmit(ev)}>
          
            <label className="label-text relative">
              <input
                className="searchbar-input"
                type="text"
                placeholder="search a food item"
                onChange={(event) => handleOnChange(event)}
                value={searchInputProduct}
              />
              <button type="submit" className="absolute left-2 top-10">
                <FiSearch />
              </button>
            </label>
          
        </form>
      </div>
    </>
  );
};

export default SearchBarNew;
