import { NavLink } from "react-router-dom";
import { menus } from "../../data/sidebarMenu";
import { FiLogOut } from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen overflow-auto w-64 hidden lg:flex flex-col bg-white shadow-sm shadow-gray-300">
      {/* logo */}
      <div className="h-16 px-5 flex items-center justify-center">
        <NavLink to={"/"} className={"flex items-center justify-center gap-3"}>
          <h1 className="text-2xl font-bold font-poppins">Misterkong</h1>
        </NavLink>
      </div>

      {/* sidebar menu */}
      <ul className="flex flex-col gap-2 mt-5 px-5" id="sidebar">
        {menus.map((menu, index) => (
          <li key={index}>
            <NavLink
              to={menu.href}
              className="rounded-lg px-4 py-3 flex items-center gap-5 capitalize text-gray-800 hover:bg-kong hover:text-gray-800"
              end={menu?.end}
            >
              {menu.icon}
              <span>{menu.title}</span>
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="mt-auto p-5">
        <NavLink
          to={"/admin/logout"}
          className="rounded-lg px-4 py-3 flex items-center gap-5 capitalize text-gray-800 hover:bg-kong "
        >
          <FiLogOut />
          <span>Logout</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
