import { useState } from "react";
import { producttype } from "./ProductType";

/* const BASE_URL = "http://localhost:5000"; */

const FormTemplate = () => {
  const [product, setProduct] = useState({
    name: "",
    type: "",
    amount: 0,
    phonenumber: ""
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
    <>
      <form className="grid" onSubmit={e => handleSubmit(e)}> {/* action="/send-data-here" method="post" */}
        <label>
          Product:
          <input
          type="text" 
          name="name"
          value={product.name}
          onChange={e => handleOnChange(e)}
          ></input>
        </label>

        <label>
          Type: 
          <ul className="productType">
            {producttype.map(({ type }, index) => {
              return (
                <li key={index}>
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

        <label>
          Amount
          <input
          type="number"
          name="amount"
          value={product.amount}
          onChange={e => handleOnChange(e)}></input>
        </label>

        <label>
          Phone number
          <input
          type="text"
          name="phonenumber"
          value={product.phonenumber}
          onChange={e => handleOnChange(e)}></input>
        </label>

        <button>Submit</button>
      </form>
    </>
  );
};

export default FormTemplate;
