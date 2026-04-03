import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../features/cart/cartSlice";

function ProductCard({product}) {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    return(
    <div
      className="border p-4 rounded flex flex-col h-full hover:shadow transition"
    >
      <img
        src={product.image || product.thumbnail || product.images?.[0]}
        alt={product.title}
        className="h-40 w-full object-contain"
        onClick={() => navigate(`/product/${product.id}`)}
      />

      <div className="flex-1">
        <h3 className="font-semibold mt-2 line-clamp-2">
            {product.title}
        </h3>
        <p className="text-lg font-bold mt-1">
            ₹{product.price}
        </p>
      </div>

      {/* Add to Cart */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // (prevents navigation)
          dispatch(addToCart(product));
        }}
        className="mt-3 w-full bg-blue-500 text-white py-1 rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
    )
}

export default ProductCard