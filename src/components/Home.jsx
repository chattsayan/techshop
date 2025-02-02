import products from "../products";
import Product from "./Product";

const Home = () => {
  return (
    <div className="px-5 py-10">
      <h1 className="text-2xl font-bold mb-4">Latest Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product._id} className="p-4 border rounded-lg shadow-md">
            <Product product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
