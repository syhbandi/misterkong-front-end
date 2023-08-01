import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";

type link = {
  id: number;
  title: string;
  link: string;
};
type Props = {
  title: string;
  links: link[];
  className: string;
};

const showMenu = {
  enter: {
    opacity: 1,
    y: 0,
    display: "block",
  },
  exit: {
    y: -5,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
    transitionEnd: {
      display: "none",
    },
  },
};

const Dropdown = ({ title, links, className }: Props) => {
  const [shown, setShown] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onWindowClick = (e: any) => {
      if (e.target !== ref.current) return setShown(false);
    };

    window.addEventListener("click", onWindowClick);

    return () => {
      window.removeEventListener("click", onWindowClick);
    };
  });

  return (
    <motion.div onClick={() => setShown((prev) => !prev)}>
      <span
        className={`cursor-pointer font-medium inline-flex items-center ${className}`}
        ref={ref}
      >
        {title}
        <FaCaretDown />
      </span>
      <motion.ul
        key={title}
        variants={showMenu}
        initial="exit"
        animate={shown ? "enter" : "exit"}
        className="absolute bg-white text-black mt-1 border border-blue-strong border-opacity-50 rounded-md p-2 shadow-md"
      >
        {links.map((link) => (
          <Link to={link.link} key={link.id}>
            <motion.li
              whileHover={{
                color: "#FFB703",
                x: 2,
              }}
              className="cursor-pointer p-1 text-blue-primary"
              key={link.id}
            >
              {link.title}
            </motion.li>
          </Link>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default Dropdown;
