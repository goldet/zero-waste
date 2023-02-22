import { useState } from "react";
import GridButtons from "./GridButtons";
import SuccessAlert from "./SuccessAlert";
import axios from "axios";
import Link from "next/link";

const BASE_URL = "http://localhost:5000";
const FormTemplate = () => {
  const [product, setProduct] = useState({
    firstname: "",
    name: "",
    type: "",
    description: "",
    amount: 0,
    phone_number: "",
    zip_code: "",
    needed: false,
    image_path: null,
  });

  const [image, setImage] = useState(null);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  //need vs share radio option in form
  const handleTruefalse = (ev) => {
    const trueFalse = ev.target.value;
    setProduct((product) => ({ ...product, needed: trueFalse }));
  };

  const handleRadio = (e) => {
    const foodType = e.target.value;
    setProduct((product) => ({ ...product, type: foodType }));
  };

  const handleChange = (event) => {
    const inputEl = event.target;
    const name = inputEl.name;
    const value = inputEl.value;
    setProduct((product) => ({ ...product, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    const productResponse = await createProduct(product);

    try {
      await axios({
        method: "post",
        url: `${BASE_URL}/images/${productResponse.insertId}/single`,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const createProduct = async (product) => {
    try {
      let productResponse = await fetch(`${BASE_URL}/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
      productResponse = await productResponse.json();

      setSuccess(true);

      function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
      }
      await sleep(3000);
      setSuccess(false);
      return productResponse;
    } catch (error) {
      setError("Something went wrong! Please try again later.");
    } finally {
      setProduct({
        firstname: "",
        name: "",
        type: "",
        description: "",
        amount: 0,
        phone_number: "",
        zip_code: "",
        needed: false,
      });
    }
  };

  return (
    <div>
      {success ? (
        <SuccessAlert />
      ) : (
        <div className="form-control">
          <form onSubmit={(e) => handleSubmit(e)} className="form-control">
            <div className="">
              <label>
                Your name:
                <input
                  className="rounded-md ml-1"
                  type="text"
                  name="firstname"
                  value={product.firstname}
                  onChange={(e) => handleChange(e)}
                ></input>
              </label>

              <label>
                Product:
                <input
                  type="text"
                  name="name"
                  value={product.name}
                  onChange={(e) => handleChange(e)}
                ></input>
              </label>

              <div className="radio-container">
                <label>
                  <input
                    type="radio"
                    name="type"
                    value={"fruits"}
                    checked={product.type === "fruits"}
                    onChange={(e) => handleRadio(e)}
                  />
                  Fruits
                </label>

                <label>
                  <input
                    type="radio"
                    name="type"
                    value={"vegetables"}
                    checked={product.type === "vegetables"}
                    onChange={(e) => handleRadio(e)}
                  />
                  Vegetable
                </label>

                <label>
                  <input
                    type="radio"
                    name="type"
                    value={"meat"}
                    checked={product.type === "meat"}
                    onChange={(e) => handleRadio(e)}
                  />
                  Meat
                </label>

                <label>
                  <input
                    type="radio"
                    name="type"
                    value={"other"}
                    checked={product.type === "other"}
                    onChange={(e) => handleRadio(e)}
                  />
                  Other
                </label>
              </div>

              <label>
                <input type="file" onChange={handleImage}></input>
              </label>

              {/* fix this later */}
             {/*   <div className="col">
                {image && <img src={image} style={{ width: "100px" }} />}
              </div>
 */}


              <label>
                Description:
                <input
                  type="text"
                  name="description"
                  value={product.description}
                  placeholder="quality and expiration date"
                  onChange={(e) => handleChange(e)}
                ></input>
              </label>

              <label>
                Amount:
                <input
                  className="rounded-md ml-1"
                  type="number"
                  name="amount"
                  value={product.amount}
                  onChange={(e) => handleChange(e)}
                ></input>
              </label>

              <label>
                Phone number:
                <input
                  type="text"
                  name="phone_number"
                  value={product.phone_number}
                  onChange={(e) => handleChange(e)}
                ></input>
              </label>

              <label>
                Zip Code:
                <input
                  type="text"
                  name="zip_code"
                  value={product.zip_code}
                  onChange={(e) => handleChange(e)}
                ></input>
              </label>

              <p className="pb-8">Is this something you need or is it to share?</p>
              <div className="radio-container">
                <label>
                  <input
                    type="radio"
                    name="needed"
                    value={"true"}
                    checked={product.needed === "true"}
                    onChange={(e) => handleTruefalse(e)}
                  />
                  Need
                </label>

                <label>
                  <input
                    type="radio"
                    name="needed"
                    value={"false"}
                    checked={product.needed === "false"}
                    onChange={(e) => handleTruefalse(e)}
                  />
                  Share
                </label>
              </div>
            </div>
            <div className="mb-8">
              <button type="submit" className="button btn tracking-wider text-lg">
                Submit
              </button>
              </div>
            
           
            <Link className="back-link mb-4" href="/grids/foodneeds">BACK TO NEEDS</Link> 
            <Link className="back-link"  href="/grids/foodavailable">BACK TO SHARE</Link>
             
              
          </form>
         
        </div>
      )}
    </div>
  );
};

export default FormTemplate;
