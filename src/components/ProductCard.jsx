const ProductCard = ({ product }) => {
  return (
    <div className="card bg-white shadow hover:shadow-lg rounded overflow-hidden">
      <img
        src={product.imageURL}
        alt={product.productName}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold">{product.productName}</h3>
        <p className="text-gray-600 mt-1 line-clamp-2">
          {product.shortDescription}
        </p>
        <p className="mt-2 font-semibold">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
