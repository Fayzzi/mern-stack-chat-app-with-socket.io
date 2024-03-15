import { Button } from "flowbite-react";
import { IoIosSearch } from "react-icons/io";
export default function SearchInput() {
  return (
    <div>
      <form aria-required className="flex items-center mt-2 p-2 gap-2">
        <input
          type="text"
          placeholder="Search"
          className="backdrop-blur-lg bg-opacity-0  rounded-full bg-transparent outline-none appearance-none focus:outline-none  focus:border-transparent focus:ring-green-400 text-sm text-white backdrop-filter bg-clip-padding "
        />
        <Button
          type="submit"
          className="bg-transparent h-10 w-10 rounded-full"
          gradientMonochrome="success"
        >
          <IoIosSearch className="  " />
        </Button>
      </form>
    </div>
  );
}
