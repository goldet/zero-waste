import { useState } from "react";

const BASE_URL = "http://localhost:5000";


const SearchBar = () => {
    const [zipCode, setZipCode] = useState({
        zip_code: ""
    });
    const [error, setError] = useState("");

    const handleChange = (event) => {
        
        const zipCodeInput = event.target.value
        setZipCode((zipCode) => ({ ...zipCode, zip_code: zipCodeInput }));
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
    
        //add zip and then get get products with that zip code
        searchZipCode;
      };
//figure this out 
      useEffect(() => {
        const getProducts = async () => {
          /*  setIsLoading(true) */
          const response = await fetch(`${BASE_URL}/products?zipCode=${zipCode}`); 
          console.log(response);
          const data = await response.json();
          console.log(data);
    
          const products = data.products.data;
          setProducts(products);
          /*  setIsLoading(false) */
        };
        getProducts();
      }, []);




    return ( 
    <>
    <form onSubmit={(e) => handleSubmit(e)}>
        <label>
            Find food in your area: 
            <input
            type="text"
            name="zip_code"
            value={product.zip_code}
            placeholder="zip code"
            onChange={(e) => handleChange(e)}>
            </input>
        </label>
        <button type="submit">Search</button>

    </form>
        

    </> 
    );
}
 
export default SearchBar;