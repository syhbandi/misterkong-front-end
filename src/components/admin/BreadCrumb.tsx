import { NavLink } from "react-router-dom";

const BreadCrumb = ({
  title,
  breadcrumb,
}: {
  title: string;
  breadcrumb: {
    title: string;
    href: string;
    active?: boolean;
  }[];
}) => {
  return (
    <div className="flex items-center justify-between mb-5 text-sm">
      <h1 className="text-xl font-semibold font-poppins">{title}</h1>
      <div className="font-poppins">
        <NavLink to={"/admin"} className={"text-gray-400"}>
          Home /{" "}
        </NavLink>
        {breadcrumb.map((item, index) => (
          <span key={`breadcrumb-${index}`}>
            {!item.active ? (
              <NavLink to={item.href} className={"text-gray-400"}>
                {item.title} /{" "}
              </NavLink>
            ) : (
              item.title
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BreadCrumb;
