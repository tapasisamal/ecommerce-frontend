import { Navigate } from "react-router-dom";

function ProtectedRoute({children}) {

    const isLoggedin = localStorage.getItem("token");

    if(!isLoggedin) {
        return <Navigate to="/login" />;
    }

    return children
}

export default ProtectedRoute