import "./Products.css";

const ProductDetail = ({ product }) => {
  return (
    <div>
      <h2 className="title text-">{product.node.title}</h2>

      <img
        className="images"
        src={product.node.featuredImage.url}
        alt={product.node.title}
      />
    </div>
  );
};

export default ProductDetail;
