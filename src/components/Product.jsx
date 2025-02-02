const Product = ({ product }) => {
  return (
    <div className="">
      <a href={`/product/${product._id}`}>
        <img
          className="object-cover w-full h-full"
          src={product.image}
          alt=""
        />
      </a>

      <div className="py-5">
        <a href={`/product/${product._id}`}>{product.name}</a>
      </div>

      <h3>₹ {product.price}</h3>
    </div>
  );
};

export default Product;
