import { useEffect, useId, useState } from "react";
import { TabTitle } from "../../../../utils/GeneralFunctions";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  TabTitle("Product Details");
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product_details_main">
      <h1>Product Details</h1>
      <div key={id}>
        <h2>{product.title}</h2>
        <p>{product.body}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
