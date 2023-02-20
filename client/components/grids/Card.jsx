const Card = ({ product, deleteProduct }) => {

  console.log(product.image_path)
  return (
    <div className="" key={product.id}>
 
    
        <div className="card card-compact w-96 bg-base-100  shadow-xl">
        <figure> {product.image_path === null ? (<img src={`https://images.unsplash.com/photo-1446611720526-39d16597055c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`}/>) : (<img src={`http://localhost:5000/images/${product.image_path}`}/>)} </figure>
          <div className="card-actions justify-end">
            <button
              className="deleteBtn h-10 w-10 bg-none "
              onClick={() => deleteProduct(product.id)}
            >
              <span role="img" aria-label="delete button">
                ✖️
              </span>
            </button>
          </div>
        <div className="card-body text-black text-start">
          <h1 className="card-title text-black">Product: {product.name}</h1> <br /> 
          {product.type} <br /> Description: <br /> {product.description} <br /> 
          Amount: {product.amount} <br /> Contact {product.firstname}:
          {product.phone_number} <br />
          <div className="">Zip code: {product.zip_code}</div>
          </div>
        </div>
   
    </div>
  );
};

export default Card;
