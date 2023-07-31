import { useState } from "react";
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

  const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log(e.target);
  };

  return (
    <motion.div
      onHoverStart={() => setShown(true)}
      onHoverEnd={() => setShown(false)}
      onClick={onClick}
    >
      <span
        className={`cursor-pointer font-medium inline-flex items-center ${className}`}
      >
        {title}
        <FaCaretDown />
      </span>
      <motion.ul
        variants={showMenu}
        initial="exit"
        animate={shown ? "enter" : "exit"}
        className="absolute bg-white mt-1 border border-blue-strong border-opacity-50 rounded-sm p-2"
      >
        {links.map((link) => (
          <Link to={link.link}>
            <motion.li
              whileHover={{
                color: "#FFB703",
                x: 2,
              }}
              className="cursor-pointer p-1 text-blue-primary"
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
