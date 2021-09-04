import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as FaIcons from "react-icons/fa";

export const SidebarData = [
  {
    title: "Home",
    path: "/home",
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: "Profile",
    path: "/profile",
    icon: <BsIcons.BsFillPersonFill />,
  },
  {
    title: "Messages",
    path: "/messages",
    icon: <AiIcons.AiFillMessage />,
  },
  {
    title: "Help",
    path: "/help",
    icon: <IoIcons.IoMdHelpCircle />,
  },
  {
    title: "Setting",
    path: "/setting",
    icon: <AiIcons.AiFillSetting />,
  },
  {
    title: "Password",
    path: "/password",
    icon: <RiIcons.RiLockPasswordFill />,
  },
  {
    title: "Sign Out",
    icon: <FaIcons.FaSignOutAlt />,
  },
];
