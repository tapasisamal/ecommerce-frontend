import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQty, decreaseQty } from "../features/cart/cartSlice";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Cart() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const items = useSelector((state) => state.cart.items)

    const total = items.reduce((acc, item) => acc + item.price * item.qty, 0)

    return(
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      <Link to="/">Products page</Link>

      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {/*Cart Items */}
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 border p-4 mb-4 rounded"
            >
          
              <img
                src={item.images}
                alt={item.title}
                className="h-20 w-20 object-contain"
              />

              {/* Info */}
              <div className="flex-1">
                <h3 className="font-semibold">{item.title}</h3>
                <p>₹{item.price}</p>
                <p>Qty: {item.qty}</p>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="text-red-500"
              >
                Remove
              </button>

              <button
              onClick={() => dispatch(increaseQty(item.id))}
              className="text-green-500"
              >Qty +
              </button>

              <button
              onClick={() => dispatch(decreaseQty(item.id))}
              >Qty -
              </button>
            </div>
          ))}

          {/* Total */}
          <div className="mt-6 text-right">
            <h2 className="text-xl font-bold">
              Total: ₹{total.toFixed(2)}
            </h2>
          </div>
        </>
      )}

      {items.length > 0 && (
        <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={() => navigate("/checkout")}
        >
            Proceed to Buy
        </button>
      )}
    </div>
    )
}

export default Cart