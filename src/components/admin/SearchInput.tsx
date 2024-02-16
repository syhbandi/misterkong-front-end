import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useDebounce } from "use-debounce";

type Props = {
  setState: (text: string) => void;
};

const SearchInput = ({ setState }: Props) => {
  const [text, setText] = useState("");
  const [debounced] = useDebounce(text, 1000);

  useEffect(() => {
    setState(debounced);
  }, [debounced]);
  return (
    <div className="flex-1 gap-3 h-11 flex items-center bg-white rounded-md border border-gray-200 px-3 focus-within:border-gray-800">
      <FiSearch className={"text-lg text-gray-400"} />
      <input
        name="cari"
        className="outline-none bg-inherit flex-1"
        placeholder="Cari"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
