import { useState, useEffect } from "react";
import { TabTitle } from "../../../../utils/GeneralFunctions";
import { Link } from "react-router-dom";

const Product = () => {
  TabTitle("Product");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!products) {
    return <div>Loading...</div>;
  }

  return (
    <div className="products_main">
      <h1>Product</h1>
      <div className="products_main_inner">
        {products.map((product) => {
          return (
            <Link
              to={`/products/product-details/${product.id}`}
              key={product.id}
              className="product_card"
            >
              <h2>{product.title}</h2>
              <p>{product.body}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
