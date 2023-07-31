import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { links } from "../../data/navbarLinks";
import Dropdown from "../Dropdown";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className="ml-auto text-2xl lg:hidden"
        onClick={() => setOpen((prev) => !prev)}
      >
        <HiMenuAlt3 />
      </button>

      <div
        className={`w-screen h-screen fixed left-0 top-0 bg-black bg-opacity-50 ${
          open ? "" : "hidden"
        }`}
      >
        <div
          className={`absolute top-0 right-0 bg-white shadow-md w-[280px] h-full p-6 animate-menu-open`}
        >
          <div className="flex items-center justify-end mb-5  text-black">
            <button
              className="text-2xl"
              onClick={() => setOpen((prev) => !prev)}
            >
              <HiX />
            </button>
          </div>
          <div className="flex flex-col">
            {links.map((nav) =>
              !nav.children ? (
                <NavLink
                  to={nav.link}
                  key={nav.id}
                  className={"py-2 px-4 font-medium text-black"}
                  onClick={() => setOpen(false)}
                >
                  {nav.title}
                </NavLink>
              ) : (
                <Dropdown
                  title={nav.title}
                  links={nav.children}
                  className={"py-2 px-4 font-medium text-black"}
                />
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
