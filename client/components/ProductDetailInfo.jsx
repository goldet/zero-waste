import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import services from "./services";
import { MdLocationOn } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import fruitimg from "../../public/fruitimg.jpg";
import vegetableimg from "../../public/vegetableimg.jpg";
import meatimg from "../../public/meatimg.jpg";
import otherimg from "../../public/otherimg.jpg";

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
            {product.needed === 1 ? (
              <Link className="back-link" href="/grids/foodneeds">
                BACK
              </Link>
            ) : (
              <Link className="back-link" href="/grids/foodavailable">
                BACK
              </Link>
            )}

            <div className="spacer-20"></div>
            {state}
            <div className="item-detail-card">
              <div className="item-detail-grid">
                {product.image_path !== null ? (
                  <img
                    className="item-detail-img"
                    src={`http://localhost:5000/images/${product.image_path}`}
                    alt={`photo of ${product.name}`}
                  />
                ) : product.image_path === null &&
                  product.type === "vegetables" ? (
                  <Image
                    className="item-detail-img"
                    src={vegetableimg}
                    alt="image of mushrooms"
                    width="100%"
                    height="100%"
                  />
                ) : product.image_path === null && product.type === "fruits" ? (
                  <Image
                  className="item-detail-img"
                  src={fruitimg}
                  alt="image of fruits"
                  width="100%"
                  height="100%"
                />
                ) : product.image_path === null && product.type === "meat" ? (
                  <Image
                    className="item-detail-img"
                    src={meatimg}
                    alt="image of chicken"
                    width="100%"
                    height="100%"
                  />
                ) : (
                  <Image
                    className="item-detail-img"
                    src={otherimg}
                    alt="image of pasta, cheese, tomatoes, salt, pepper, garlic, basil, a pot, and a pan"
                    width="100%"
                    height="100%"
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
                    <p className="item-detail-heading">AMOUNT</p>
                    <p>
                      {product.amount}{" "}
                      {product.amount_type === "none" ||
                      product.amount_type === "Amount Type"
                        ? null
                        : product.amount_type}
                    </p>
                    <p className="item-detail-heading">PRODUCT DESCRIPTION</p>
                    <p>{product.description}</p>
                    <p className="item-detail-heading">CONTACT INFO</p>
                    <p>
                      {product.firstname} {product.phone_number}
                    </p>
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
