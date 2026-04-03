import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import authService from "../services/api";
import { login } from "../features/auth/authSlice";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {

      console.log("Before login");  
      await authService.login(data);
      console.log("Before login");

      const user = await authService.getUser();
      console.log("User:", user);

      dispatch(login(user));

      console.log("Before navigate");

      navigate("/dashboard");
    } catch (error) {
      console.log("login error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6">
          Login
        </h2>

        {/* Email */}
        <input
          type="email"
          placeholder="Enter your email"
          {...register("email", { required: true })}
          className="w-full border border-gray-300 p-2 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Enter your password"
          {...register("password", { required: true })}
          className="w-full border border-gray-300 p-2 mb-6 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Login
        </button>

        {/* Register link */}
        <p className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-500 hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;