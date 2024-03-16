import axios from "axios";
import Conversations from "./SmallComponest/Conversations";
import SearchInput from "./SmallComponest/SearchInput";
import { CiLogout } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { LogoutUser } from "../redux/UserSlice";

export default function Sidebar() {
  const dispatch = useDispatch();
  const handleogout = async (e) => {
    e.preventDefault();
    dispatch(LogoutUser());
  };
  return (
    <div className="overflow-y-scroll relative">
      <SearchInput />
      <div className="my-4  border-black border-opacity-20 border-t" />
      <Conversations />
      <div
        onClick={handleogout}
        className="fixed bottom-3 left-3 bg-white h-10 w-10 flex items-center justify-center rounded-full cursor-pointer"
      >
        <CiLogout />
      </div>
    </div>
  );
}
