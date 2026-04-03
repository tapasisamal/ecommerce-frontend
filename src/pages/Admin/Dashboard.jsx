import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import authService from "../../services/api";
import { logout } from "../../features/auth/authSlice";

function Dashboard() {
  const user = useSelector((state) => state.auth.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await authService.logout();
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center items-start">
      
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
        
        <h1 className="text-2xl font-bold mb-4">
          Welcome 
        </h1>

        {/* User Info */}
        <div className="mb-6">
          <p className="text-gray-700">
            <span className="font-semibold">Username:</span>{" "}
            {user?.username || "N/A"}
          </p>

          <p className="text-gray-700 mt-2">
            <span className="font-semibold">Email:</span>{" "}
            {user?.email || "N/A"}
          </p>
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          <button
            onClick={() => navigate("/cart")}
            className="flex-1 bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Go to Cart
          </button>

          <button
            onClick={handleLogout}
            className="flex-1 bg-red-500 text-white py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;