import {
  MdDashboard,
  MdOutlineArticle,
  MdOutlineHelpOutline,
} from "react-icons/md";
import { LuFileSignature } from "react-icons/lu";

export type MenusType = {
  title: string;
  icon?: React.ReactNode;
  href: string;
  end?: boolean;
};

export const menus: MenusType[] = [
  {
    title: "dashboard",
    icon: <MdDashboard />,
    href: "/admin",
    end: true,
  },
  {
    title: "Blog",
    icon: <MdOutlineArticle />,
    href: "/admin/blog",
  },
  {
    title: "Bantuan",
    icon: <MdOutlineHelpOutline />,
    href: "/admin/bantuan",
  },
  {
    title: "Syarat & Ketentuan",
    icon: <LuFileSignature />,
    href: "/admin/syarat-ketentuan",
  },
  {
    title: "Kebijakan Privasi",
    icon: <LuFileSignature />,
    href: "/admin/kebijakan-privasi",
  },
];
