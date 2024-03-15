import Conversations from "./SmallComponest/Conversations";
import SearchInput from "./SmallComponest/SearchInput";

export default function Sidebar() {
  return (
    <div className="overflow-y-scroll">
      <SearchInput />
      <div className="my-4  border-black border-opacity-20 border-t" />
      <Conversations />
    </div>
  );
}
