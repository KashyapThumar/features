import { useEffect, useState } from "react";
import { TabTitle } from "../../../../utils/GeneralFunctions";
import { Link, useParams } from "react-router-dom";

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
        <Link to="/products" className="back_to_product">
          <svg
            fill="#000000"
            width="256px"
            height="256px"
            viewBox="0 0 24.00 24.00"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#000000"
            stroke-width="0.00024000000000000003"
            transform="rotate(0)"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke="#CCCCCC"
              stroke-width="0.144"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M1.293,12.707a1,1,0,0,1,0-1.414l5-5A1,1,0,0,1,7.707,7.707L4.414,11H22a1,1,0,0,1,0,2H4.414l3.293,3.293a1,1,0,1,1-1.414,1.414Z"></path>
            </g>
          </svg>
          Back to products
        </Link>
        <h2>{product.title}</h2>
        <p>{product.body}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
