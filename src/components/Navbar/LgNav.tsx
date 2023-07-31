import { NavLink } from "react-router-dom";
import Dropdown from "../Dropdown";
import { links } from "../../data/navbarLinks";

const LgNav = () => {
  return (
    <div className="ml-auto items-center hidden lg:flex">
      {links.map((nav, index) =>
        nav.children ? (
          <Dropdown
            title={nav.title}
            links={nav.children}
            key={index}
            className={"py-2 px-4 font-medium"}
          />
        ) : (
          <NavLink
            to={nav.link}
            key={index}
            className={"py-2 px-4 font-medium"}
          >
            {nav.title}
          </NavLink>
        )
      )}
    </div>
  );
};

export default LgNav;
