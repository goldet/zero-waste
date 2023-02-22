import Link from "next/link";

const Card = ({ product, deleteProduct }) => {
  return (
    <div key={product.id}>
      <div className="card card-compact w-80 bg-base-100 shadow-xl">
        <Link href={`/productdetail/${product.id}`}> 
          <figure className="overflow-hidden w-full h-48">
            {product.image_path !== null ? (
              <img
              className="w-full h-auto"
              src={`http://localhost:5000/images/${product.image_path}`}
              alt={`photo of ${product.name}`}
            />
             
            ) : product.image_path === null && product.type === "vegetables" ? (
              <img
              className="w-full h-auto"
              src={`https://images.unsplash.com/photo-1552245504-5b1e10c5c04a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80`}
            /> ) : product.image_path === null && product.type === "fruits" ? (
              <img
              className="w-full h-auto"
              src={`https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1239&q=80`}
            /> ) :  product.image_path === null && product.type === "meat" ? (
              <img
              className="w-full h-auto"
              src={`https://images.unsplash.com/photo-1552962402-6bafde66a37c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80`}
            /> ) : ( 
              <img
              className="w-full h-auto"
              src={`https://images.unsplash.com/photo-1518291344630-4857135fb581?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80`}
            />
            )}
          </figure>
        </Link>
        <div className="card-actions justify-end">
          <button
            className="deleteBtn h-10 w-10 bg-none"
            onClick={() => deleteProduct(product.id)}
          >
            <span role="img" aria-label="delete button">
              ✖️
            </span>
          </button>
        </div>
        <div className="card-body text-black text-start">
          <h1 className="card-title text-black">Product: {product.name}</h1>
          <div>Zip code: {product.zip_code}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
