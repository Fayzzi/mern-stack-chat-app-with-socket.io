import { Link } from "react-router-dom";
import { Button, TextInput } from "flowbite-react";
export default function Login() {
  return (
    <div className="flex flex-col justify-center items-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-blur-lg backdrop-filter bg-opacity-0">
        <h1 className="text-3xl text-center text-white font-semibold">
          Login <span className="text-blue-500">ChatApp</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base  label-text">username</span>
            </label>
            <TextInput type="text" placeholder="Enter Username" />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base  label-text">Password</span>
            </label>
            <TextInput type="password" placeholder="Enter Password" />
          </div>
          <Button gradientDuoTone={"purpleToBlue"} pill className="w-full mt-4">
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
