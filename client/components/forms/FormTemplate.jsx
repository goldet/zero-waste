import { useState } from "react";
import { producttype } from "./ProductType";

/* const BASE_URL = "http://localhost:5000"; */

const FormTemplate = () => {
  const [product, setProduct] = useState({
    firstname:"",
    name: "",
    type: "",
    description:"",
    amount: Number,
    phone_number: "",
    zip_code:""
  });
  const [checkedState, setCheckedState] = useState(
    new Array(producttype.length).fill(false)
  );
  const [error, setError] = useState("");

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

  };



 /* 
     const addProduct = ((product) => {
    setProducts((state) => {
     return [...state, product]
    })
 }) */

  const handleChange = event => {
    const inputEl = event.target;
    const name = inputEl.name;
    const value = inputEl.value;

    setProduct(product => ({ ...product, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    createProduct(product);

   /*  addProduct(product) */
  };

  const createProduct = async product => {
    try {
      await fetch(`${BASE_URL}/products/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
      });
      window.location.reload();
    } catch (error) {
      setError("Something went wrong! Please try again later.");
    } finally {
    }
  };



  return (
    <div >
      <form  onSubmit={e => handleSubmit(e)}> {/* action="/send-data-here" method="post" */}
      <div className="flex flex-col items-start p-10">
      <label>
          Your name:
          <input
          className="pb-4"
          type="text" 
          name="firstname"
          value={product.firstname}
          onChange={e => handleChange(e)}
          ></input>
        </label>

        <label>
          Product:
          <input
          className="pb-4"
          type="text" 
          name="name"
          value={product.name}
          onChange={e => handleChange(e)}
          ></input>
        </label>

        <label className="pr-3">
          Type: 
          <ul className="productType inline-flex pb-4">
            {producttype.map(({ type }, index) => {
              return (
                <li className="pr-2" key={index}>
                  <div className="productsList">
                    <input 
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={type}
                    value={type}
                    checked={checkedState[index]}
                    onChange={() => handleOnChange(index)}
                    />
                    <label htmlFor={`custom-checkbox-${index}`}>{type}</label>
                  </div>
                </li>
              );
            })}
          </ul>
        </label>
         

        <label className="flex flex-col">
          Description: 
          <textarea 
          className=" h-16 w-80"
          type="text"
          name="description"
          value={product.description}
          placeholder="Please provide the condition of food and what days/times you are avilable for pick-up"
          onChange={e => handleChange(e)}></textarea>
        </label>

        <label>
          Amount:
          <input
          className="pb-4"
          type="number"
          name="amount"
          value={product.amount}
          onChange={e => handleChange(e)}></input>
        </label>

        <label>
          Phone number:
          <input
          className="pb-4"
          type="text"
          name="phone_number"
          value={product.phone_number}
          onChange={e => handleChange(e)}></input>
        </label>


        <label>
          Zip Code:
          <input
          className="pb-4"
          type="text"
          name="zip_code"
          value={product.zip_code}
          onChange={e => handleChange(e)}></input>
        </label>
        </div>
      <div className="flex justify-center">
        <button className="btn2 w-20">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default FormTemplate;
