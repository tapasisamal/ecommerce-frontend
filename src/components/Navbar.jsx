import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {

    const items = useSelector((state) => state.cart.items)

    const totalItems = items.reduce((acc, item) => acc + item.qty, 0)

    return(
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
      
      <Link to="/" className="text-xl font-bold">
        MyStore 🛒
      </Link>

      <div className="flex items-center gap-6">

        <Link to="/" className="hover:text-gray-300">
          Home
        </Link>

        {/* Cart with count */}
        <Link to="/cart" className="relative hover:text-gray-300">
          Cart

          {totalItems > 0 && (
            <span className="absolute -top-2 -right-4 bg-red-500 text-xs px-2 py-0.5 rounded-full">
              {totalItems}
            </span>
          )}
        </Link>

        <Link to="/login" className="hover:text-gray-300">
          Login
        </Link>

        <Link to="/signup" className="hover:text-gray-300">
          Signup
        </Link>

      </div>
    </nav>
    )
}

export default Navbar