import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Usergetter } from "./redux/UserSlice";
import UserProtectedRoutes from "./ProtectedRoutes/UserProtectedRoutes";

function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(Usergetter());
  }, [dispatch]);
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <UserProtectedRoutes>
                <Home />
              </UserProtectedRoutes>
            }
          />
          <Route
            path="/login"
            element={user ? <Navigate to={"/"} /> : <Login />}
          />

          <Route
            path="/signup"
            element={user ? <Navigate to={"/"} /> : <Signup />}
          />
        </Routes>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
