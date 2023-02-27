import Link from "next/link";
import fruitimg from "../../public/fruitimg.jpg";
import vegetableimg from "../../public/vegetableimg.jpg";
import meatimg from "../../public/meatimg.jpg";
import otherimg from "../../public/otherimg.jpg";
import Image from "next/image";

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
              <Image
                className="w-full h-auto"
                src={vegetableimg}
                alt="image of mushrooms"
                width="100%"
                height="auto"
              />
            ) : product.image_path === null && product.type === "fruits" ? (
              <Image
                className="w-full h-auto"
                src={fruitimg}
                alt="image of banana"
                width="100%"
                height="auto"
              />
            ) : product.image_path === null && product.type === "meat" ? (
              <Image
                className="w-full h-auto"
                src={meatimg}
                alt="image of chicken on a fork"
                width="100%"
                height="auto"
              />
            ) : (
              <Image
                className="w-full h-auto"
                src={otherimg}
                alt="image of pasta, cheese, tomatoes, salt, pepper, garlic, basil, a pot, and a pan"
                width="100%"
                height="auto"
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
