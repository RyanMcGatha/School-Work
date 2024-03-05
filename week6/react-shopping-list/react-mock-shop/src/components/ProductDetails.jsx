const ProductDetail = ({ product }) => {
  return (
    <div>
      <h2>{product.node.title}</h2>
      <figure>
        <img
          className="images"
          src={product.node.featuredImage.url}
          alt={product.node.title}
        />
      </figure>
    </div>
  );
};

export default ProductDetail;
