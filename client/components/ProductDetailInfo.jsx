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

  useEffect(() => {
    const getProduct = async () => {
      if (id) {
        try {
          const product = await services.productService.fetchOne(id);
          setProduct(product[0]);
        } catch (error) {
          setError(error);
        }
      }
    };
    getProduct();
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
