import { useState } from "react";

const BASE_URL = "http://localhost:5000";
const FormTemplate = () => {
  const [product, setProduct] = useState({
    firstname: "",
    name: "",
    type: "",
    description: "",
    amount: Number,
    phone_number: "",
    zip_code: "",
    needed: Boolean,
  });

  const [error, setError] = useState("");

  const handleTruefalse = (ev) => {
    const trueFalse = ev.target.value;
    setProduct((product) => ({ ...product, needed: trueFalse }));
  }

  const handleRadio = (e) => {
    console.log(e.target.name);
    const foodType = e.target.value;
    setProduct((product) => ({ ...product, type: foodType }));
  };

  const handleChange = (event) => {
    const inputEl = event.target;
    const name = inputEl.name;
    const value = inputEl.value;
    setProduct((product) => ({ ...product, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    createProduct(product);
  };

  const createProduct = async (product) => {
    try {
      await fetch(`${BASE_URL}/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
      window.location.reload();
    } catch (error) {
      setError("Something went wrong! Please try again later.");
    } finally {
    }
    console.log(product);
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="flex flex-col items-start p-10">
          <label>
            Your name:
            <input
              className="pb-4"
              type="text"
              name="firstname"
              value={product.firstname}
              onChange={(e) => handleChange(e)}
            ></input>
          </label>

          <label>
            Product:
            <input
              className=""
              type="text"
              name="name"
              value={product.name}
              onChange={(e) => handleChange(e)}
            ></input>
          </label>

          <div className="radio">
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
          </div>
          <div className="radio">
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
          </div>
          <div className="radio">
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
          </div>
          <div className="radio">
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

          <label className="flex flex-col">
            Description:
            <textarea
              className=" h-20 w-80"
              type="text"
              name="description"
              value={product.description}
              placeholder="Provide the condition of food you have if sharing and what days/times you are avilable for pick-up/drop-off"
              onChange={(e) => handleChange(e)}
            ></textarea>
          </label>

          <label>
            Amount:
            <input
              className="pb-4"
              type="number"
              name="amount"
              value={product.amount}
              onChange={(e) => handleChange(e)}
            ></input>
          </label>

          <label>
            Phone number:
            <input
              className="pb-4"
              type="text"
              name="phone_number"
              value={product.phone_number}
              onChange={(e) => handleChange(e)}
            ></input>
          </label>

          <label>
            Zip Code:
            <input
              className="pb-4"
              type="text"
              name="zip_code"
              value={product.zip_code}
              onChange={(e) => handleChange(e)}
            ></input>
          </label>
          

          <p>Is this something you need?</p>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="needed"
                value={"true"}
                checked={product.needed === "true"}
                onChange={(e) => handleTruefalse(e)}
              />
              yes
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="needed"
                value={"false"}
                checked={product.needed === "false"}
                onChange={(e) => handleTruefalse(e)}
              />
              no
            </label>
          </div>

        </div>
        <div className="flex justify-center">
          <button type="submit" className="btn2 w-20">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormTemplate;
