import { Link, useNavigate } from "react-router-dom";
import { Button, TextInput } from "flowbite-react";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { Usergetter } from "../redux/UserSlice";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const loggInUser = async (e) => {
    e.preventDefault();
    await axios
      .post("/api/v2/user/login", {
        username,
        password,
      })
      .then(() => {
        toast.dismiss();
        toast.success("Logged in successfully");
        dispatch(Usergetter());
      })
      .catch((e) => toast.error(e.response.data.message));
  };
  return (
    <div className="flex flex-col justify-center items-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-blur-lg backdrop-filter bg-opacity-0">
        <h1 className="text-3xl text-center text-white font-semibold">
          Login <span className="text-blue-500">ChatApp</span>
        </h1>
        <form aria-required onSubmit={loggInUser}>
          <div>
            <label className="label p-2">
              <span className="text-base  label-text">username</span>
            </label>
            <TextInput
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Enter Username"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base  label-text">Password</span>
            </label>
            <TextInput
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              type="password"
              placeholder="Enter Password"
            />
          </div>
          <Button
            type="submit"
            gradientDuoTone={"purpleToBlue"}
            pill
            className="w-full mt-4"
          >
            Login
          </Button>
        </form>
        <div className="flex gap-1 mt-4">
          <h1 className="text-black">{"Don't"} Have Account?</h1>
          <Link
            className="hover:ring-blue-300 hover:underline hover:text-blue-300"
            to={"/signup"}
          >
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
}
