import { useState } from "react";
import { producttype } from "./ProductType";


const BASE_URL = "http://localhost:5000"
const FormTemplate = () => {
  const [product, setProduct] = useState({
    firstname:"",
    name: "",
    type: "",
    description:"",
    amount: 0,
    phone_number: "",
    zip_code:"",
    needed:Boolean
  });
  /* const [checkedState, setCheckedState] = useState(
    new Array(producttype.length).fill(false)
  ); */

  const [checked, setChecked] = useState("")
  const [error, setError] = useState("");
 
//for old checkboxes 
 /*  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

  }; */
 

  const handleChange = event => {
    const inputEl = event.target;
    const name = inputEl.name;
    const value = inputEl.value;

    setProduct(product => ({ ...product, [name]: value }));
  };


  const handleSubmit = event => {
    event.preventDefault();

    createProduct(product);

   
  };
  console.log("1")

  const createProduct = async product => {
    console.log("hi")
    try {
      await fetch(`${BASE_URL}/products`, {
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
      <form  onSubmit={e => handleSubmit(e)}> 
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

    {/* FIX ISSUE CONNECT ON CHANGE WITH THE REST?? NOT COMING  */}
       {/*  <label className="pr-3">
          Type: 
          <ul className="productType inline-flex pb-4">
            {producttype.map(({ type }, index) => {
              return (
                <li className="pr-2" key={index}>
                  <div className="productsList">
                    <input 
                    type="radio"
                    id={`custom-checkbox-${index}`}
                    name={type}
                    value={product.type}
                    checked={checkedState[index]}
                    onChange={() => handleOnChange(index)}
                    />
                    <label htmlFor={`custom-checkbox-${index}`}>{type}</label>
                  </div>
                </li>
              );
            })}
          </ul>
        </label> */}

<div className="radio">
          <label>
            <input type="radio" value={product.type} checked={true} onChange={e => handleChange(e)}/>
            Fruits
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value={product.type} onChange={e => handleChange(e)} />
            Vegetable
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value={product.type} onChange={e => handleChange(e)}/>
           Meat
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value={product.type} onChange={e => handleChange(e)} />
          other
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

        <label>
          Is this something you need? 
          <input
          className="pb-4"
          type="boolean"
          name="needed"
          placeholder="true or false"
          value={product.needed}
          onChange={e => handleChange(e)}></input>
        </label>

        </div>
      <div className="flex justify-center">
        <button type="submit" className="btn2 w-20">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default FormTemplate;
