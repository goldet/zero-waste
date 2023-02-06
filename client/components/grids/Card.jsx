const Card = ({ product }) => {
  return (
    <div className="" key={product.id}>
      <span>
        <div
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1454944338482-a69bb95894af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ymxha2MlMjBhbmQlMjB3aGl0ZSUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60")`,
          }}
          className="container card w-80 h-96 justify-center text-start bg-base-100 shadow-xl mb-6 card-body text-black "
        >
          {" "}
          <div className="card-actions justify-end">
            <button
              className="deleteBtn btn2 h-10 w-10 bg-none "
              onClick={() => deleteProduct(product.id)}
            >
              {" "}
              <span role="img" aria-label="delete button">
                ✖️
              </span>
            </button>
          </div>
          <h1 className="card-title">Product: {product.name}</h1> <br /> Type:{" "}
          {product.type} <br /> Description: <br /> {product.description} <br />{" "}
          Amount: {product.amount} <br /> Contact {product.firstname}:{" "}
          {product.phone_number} <br />{" "}
          <div className="">Zip code: {product.zip_code} </div>
        </div>
      </span>
    </div>
  );
};

export default Card;
