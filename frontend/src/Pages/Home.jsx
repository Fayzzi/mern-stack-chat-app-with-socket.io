import Sidebar from "../Components/Sidebar";
import MessageBox from "../Components/MessageBox";

export default function Home() {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 backdrop-blur-lg bg-opacity-0 backdrop-filter bg-clip-padding">
      <Sidebar />
      <MessageBox />
    </div>
  );
}
