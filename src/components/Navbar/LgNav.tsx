import { NavLink } from "react-router-dom";

type link = {
  id: number;
  link: string;
  title: string;
};

type Props = {
  links: link[];
};

const LgNav = ({ links }: Props) => {
  return (
    <div className="ml-auto items-center hidden lg:flex">
      {links.map((nav, index) => (
        <NavLink to={nav.link} key={index} className={"py-2 px-4 font-medium"}>
          {nav.title}
        </NavLink>
      ))}
    </div>
  );
};

export default LgNav;
