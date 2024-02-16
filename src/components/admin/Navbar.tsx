import { useStore } from "zustand";
import useUserStore from "../../states/auth";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import { logo } from "../../assets";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user } = useStore(useUserStore);
  return (
    <div className="h-16 bg-white flex items-center px-5 sticky z-50 top-0 lg:static">
      {/* utk mobile */}
      <button className="text-xl lg:hidden">
        <MdMenu />
      </button>
      {/* desktop */}
      <button className="hidden lg:flex items-center justify-center text-xl">
        <MdMenu />
      </button>
      {/* search */}
      <div className="ml-5 px-3 flex items-center gap-3 bg-gray-100 border border-gray-200 rounded-lg h-10 focus-within:border-gray-800">
        <input
          type="text"
          name="search"
          className="outline-none bg-inherit w-full"
          placeholder="Cari"
          autoComplete="off"
        />
        <FiSearch className={"text-xl text-gray-500"} />
      </div>

      <div className="flex items-center gap-5 ml-auto">
        <IoNotificationsOutline className={"text-xl"} />
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="profile image"
            className="w-9 h-9 rounded-full object-cover bg-kong"
          />
          <div>
            <p className="font-semibold">{user.nama_user}</p>
            <p className="text-xs font-light text-gray-500">Administrator</p>
          </div>
          <button className="ml-5" onClick={() => toast.success("tes")}>
            <FiChevronDown />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
