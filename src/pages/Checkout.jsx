import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../features/cart/cartSlice";

function Checkout() {

    const items = useSelector((state) => state.cart.items)
    const {register, handleSubmit, reset} = useForm()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const total = items.reduce((acc, item) => acc + item.price * item.qty, 0)

    const onSubmit = (data) => {
        console.log("User Info:", data);
        console.log("Order Items:", items);

        // Navigate to order page with data
        navigate("/order", {
            state: {
                items,
                total,
                user: data,
            },
        });
        
        dispatch(clearCart());

        reset();
    };
    

    return(
        <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Cart Summary */}
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Order Summary
            </h2>

            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 border p-3 mb-3 rounded"
              >
                <img
                  src={item.images}
                  alt={item.title}
                  className="h-16 w-16 object-contain"
                />

                <div className="flex-1">
                  <h3 className="text-sm font-medium">
                    {item.title}
                  </h3>
                  <p>₹{item.price}</p>
                  <p>Qty: {item.qty}</p>
                </div>
              </div>
            ))}

            <h2 className="text-lg font-bold mt-4">
              Total: ₹{total.toFixed(2)}
            </h2>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="border p-4 rounded"
          >
            <h2 className="text-xl font-semibold mb-4">
              Shipping Details
            </h2>

            <input
              type="text"
              placeholder="Full Name"
              {...register("name", { required: true })}
              className="w-full border p-2 mb-3"
            />

            <input
              type="text"
              placeholder="Address"
              {...register("address", { required: true })}
              className="w-full border p-2 mb-3"
            />

            <input
              type="text"
              placeholder="Phone Number"
              {...register("phone", { required: true })}
              className="w-full border p-2 mb-3"
            />

            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded"
            >
              Place Order
            </button>
          </form>
        </div>
      )}
    </div>
    )
}

export default Checkout