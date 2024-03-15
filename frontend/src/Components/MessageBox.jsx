import { Button, TextInput } from "flowbite-react";
import { FaPaperPlane } from "react-icons/fa";
export default function MessageBox() {
  const nochatselected = true;
  return (
    <div className="md:w-[550px] sm:w-[450px] flex flex-col ">
      {nochatselected ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="flex border-b border-gray-500 items-center gap-2 text-gray-300  p-2 ">
            <img
              className="h-10 w-10 object-cover rounded-full"
              src={
                "https://imgv3.fotor.com/images/blog-richtext-image/10-profile-picture-ideas-to-make-you-stand-out.jpg"
              }
              alt=""
            />
            <span>Faizan Ali</span>
          </div>
          <div className="overflow-auto my-3 flex-1">
            <div className=" flex px-4 my-2 gap-2 text-gray-300   ">
              <img
                className="h-10 w-10 object-cover rounded-full"
                src={
                  "https://imgv3.fotor.com/images/blog-richtext-image/10-profile-picture-ideas-to-make-you-stand-out.jpg"
                }
                alt=""
              />
              <span className="bg-yellow-200 p-2 rounded text-black">
                Faizan Ali
              </span>
            </div>
            <div className=" flex px-4 my-2 gap-2 text-gray-300   ">
              <img
                className="h-10 w-10 object-cover rounded-full"
                src={
                  "https://imgv3.fotor.com/images/blog-richtext-image/10-profile-picture-ideas-to-make-you-stand-out.jpg"
                }
                alt=""
              />
              <span className="bg-yellow-200 p-2 rounded text-black">
                Faizan Ali
              </span>
            </div>{" "}
          </div>
          <form className="p-2 flex gap-2" action="">
            <input
              className="w-full bg-transparent focus:appearance-none focus:outline-none focus:ring-green-400 focus:border-transparent rounded-xl "
              type="text"
            />
            <Button gradientMonochrome={"success"} pill type="submit">
              <FaPaperPlane />
            </Button>
          </form>
        </>
      )}
    </div>
  );
}
const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome Faizan Ali</p>
      </div>
    </div>
  );
};
