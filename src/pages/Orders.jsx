import { useLocation, useNavigate } from "react-router-dom";

function Order() {
  const { state } = useLocation();
  const navigate = useNavigate();

  // If user refreshes → state will be undefined
  if (!state) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-bold mb-4">
          No recent order. Start shopping!
        </h2>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Go to Home
        </button>
      </div>
    );
  }

  const { items, total, user } = state;

  // Fake order ID
  const orderId = Math.floor(Math.random() * 1000000);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-green-600">
          Order Placed Successfully ✅
        </h1>
        <p className="mt-2">Order ID: #{orderId}</p>
      </div>

      {/* User Details */}
      <div className="border p-4 rounded mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Shipping Details
        </h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Address:</strong> {user.address}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
      </div>

      <div className="border p-4 rounded mb-6">
        <h2 className="text-xl font-semibold mb-4">
          Order Items
        </h2>

        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 border-b py-3"
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

            <p className="font-semibold">
              ₹{(item.price * item.qty).toFixed(2)}
            </p>
          </div>
        ))}
      </div>

      <div className="text-right">
        <h2 className="text-xl font-bold">
          Total Paid: ₹{total.toFixed(2)}
        </h2>
      </div>

      <div className="text-center mt-6">
        <button
          onClick={() => navigate("/")}
          className="bg-blue-500 text-white px-6 py-2 rounded"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

export default Order;