import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

export default function UserProtectedRoutes({ children }) {
  const { user, loading } = useSelector((state) => state.user);
  if (loading) {
    return <div>...Loading</div>;
  }
  if (!user && !loading) {
    return <Navigate to={"/login"} replace />;
  }
  return children;
}
