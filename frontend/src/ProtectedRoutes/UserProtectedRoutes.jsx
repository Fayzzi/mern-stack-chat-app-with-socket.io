import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

export default function UserProtectedRoutes({ children }) {
  const { user, loading } = useSelector((state) => state.user);
  if (user) {
    return <Navigate to={"/"} replace />;
  }
  return children;
}
