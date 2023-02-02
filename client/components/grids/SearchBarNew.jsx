import Link from "next/link";
import { useState, useEffect } from "react";

const BASE_URL = "http://localhost:5000";

const SearchBarNew = () => {
const [searchInput, setSearchInput] = useState('')
const [allProducts, setAllProducts] = useState(null)


const handleChange = (e) => {
    setSearchInput(e.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    getProductByZipCode(searchInput)
    
};

const getProductByZipCode = async (searchInput) => { 
      
const response = await fetch(`${BASE_URL}/products?zip_code=${searchInput}`); 
   console.log(response);
   const data = await response.json();
   console.log(data);
   const products= data.product;
   setAllProducts(products);
  
  };

  console.log(allProducts)

    return ( 
<>

<form onSubmit={(e) => handleSubmit(e)}>
<div className="form-control w-full max-w-xs">
<label className="label-text">
    Search a location:
<input
className="input input-bordered w-full max-w-xs mt-2 items-center h-9"
   type="text"
   placeholder="zip Code"
   onChange={(e) => handleChange(e)}
   value={searchInput} />
   </label>
   </div>
   <button type="submit" className="btn btn-sm my-2">Search</button> {/* <Link type="submit"  href="/grids/location"> Search</Link> */}
   </form>


{allProducts && 
   allProducts.map((product) => (
    <div key = {product.id}>
       <div className="container">
                {" "}
                Product: {product.name} <br /> Type: {product.type} <br />{" "}
                Description: <br /> {product.description} <br /> Amount:{" "}
                {product.amount} <br /> Contact {product.firstname}:{" "}
                {product.phone_number} <br /> Zip code: {product.zip_code}
              </div>
    </div>
   ))}

</>

     );
}
 
export default SearchBarNew;