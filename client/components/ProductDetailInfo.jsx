import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import services from "./services";
import ProductService from "./services/ProductService";


const BASE_URL = "http://localhost:5000";

//component that shows an individual item
const ProductDetailInfo = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);


  //get product by id 
  useEffect(() => {
    const getProducts = async () => {
      if (id) { // null check
        try {
          const response = await fetch(`${BASE_URL}/products/${id}`);
          const data = await response.json();
          const product = data[0];
          setProduct(product);
        } catch(error) {
          setError(error);
        }
      }
    };
    getProducts();
  }, [id]);



  // Show error & loading states
  let state = <></>;
  if (error) {
    state = <>{error}</>;
  }

  return (
    <div className="page-container">
      

      {/* testing */}
      {product && <h3 className="">{product.id}</h3>}
    </div>
  );
};

export default ProductDetailInfo;
