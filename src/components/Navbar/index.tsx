import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import LgNav from "./LgNav";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const scrollFunc = () => {
      if (window.scrollY > 30) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", scrollFunc);

    return () => {
      window.removeEventListener("scroll", scrollFunc);
    };
  }, [window]);

  return (
    <nav
      className={`top-0 left-0 fixed w-full transition-all duration-300 z-20 font-poppins ${
        isScroll ? "bg-white text-black shadow-md" : "text-white py-3"
      }`}
    >
      <div className="flex items-center container mx-auto py-4 px-6 max-w-7xl">
        <Link to={"/"} className={"text-2xl font-bold"}>
          MisterKong
        </Link>

        <LgNav />

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
