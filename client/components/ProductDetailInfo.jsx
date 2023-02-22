import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import GridButtons from "./forms/GridButtons";
import services from "./services";
import { MdLocationOn } from "react-icons/md";

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
      {product ? (
        <article className="main">
          <div className="container1">
            <GridButtons />
            <div className="spacer-20"></div>
            {state}
            <div className="item-detail-card">
              <div className="item-detail-grid">
                {product.image_path === null ? (
                  <img
                    className="item-detail-img"
                    src={`https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80`}
                  />
                ) : (
                  <img
                    className="item-detail-img"
                    src={`http://localhost:5000/images/${product.image_path}`}
                    alt={`photo of ${product.name}`}
                  />
                )}
                <div className="item-detail-text">
                  <div>
                    <h3 className="item-detail-title">{product.name}</h3>
                    <div className="location-container">
                      <div className="location-icon">
                        <MdLocationOn />
                      </div>
                      <div className="location-text">
                        <p>{product.zip_code}</p>
                      </div>
                    </div>
                    <p className="item-detail-heading">ITEM DESCRIPTION</p>
                    <p>{product.description}</p>
                    <p className="item-detail-heading">CONTACT INFO</p>
                    <p>{product.phone_number}</p>
                  </div>
                  <div className="horizontal-line">
                    <p className="item-detail-id">Product-ID: {product.id}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      ) : null}
      <div className="spacer-50"></div>
    </div>
  );
};

export default ProductDetailInfo;
