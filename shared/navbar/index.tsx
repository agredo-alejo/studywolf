import React, { useState, useRef } from "react";
import Link from "next/link";
import ProfileSubmenu from "./profileSubmenu";
import Topbar from "./topbar";
import HomeIcon from "@mui/icons-material/Home";
import StorageIcon from "@mui/icons-material/Storage";
import PersonIcon from "@mui/icons-material/Person";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useClickOutside } from "@utils/useClickOutside";

const navbarItems = [
   {
      icon: <HomeIcon />,
      text: "Inicio",
      link: "/dashboard",
   },
   {
      icon: <StorageIcon />,
      text: "Cursos",
      link: "/cursos",
   },
];

function Navbar() {
   const [showSubmenu, setShowSubmenu] = useState(false);
   const [showMenu, setShowMenu] = useState(false);
   const navRef = useRef<HTMLElement | null>(null);

   const toggleMenu = () => {
      setShowMenu((showMenu) => !showMenu);
   };

   const toggleSubmenu = () => {
      setShowSubmenu((showSubmenu) => !showSubmenu);
   };

   useClickOutside(navRef, () => {
      setShowMenu(false);
      setShowSubmenu(false);
   });

   return (
      <nav
         ref={navRef}
         className="fixed z-50 w-full text-white md:flex md:justify-center "
      >
         <Topbar toggle={toggleMenu} />
         <ul
            className={`bg-[#202020] pb-12 overflow-y-scroll md:overflow-y-visible hideScrollbar navUl ${
               showMenu ? "left-0" : "left-[-100%]"
            } md:left-[25%] md:flex-row md:h-fit md:pb-0 md:top-1`}
         >
            {navbarItems.map(({ icon, text, link }) => (
               <li key={text + link}>
                  <Link href={link} className="flex gap-2 p-3 hoverOrange">
                     {icon}
                     <p>{text}</p>
                  </Link>
               </li>
            ))}

            <li className="hoverOrange" onClick={toggleSubmenu}>
               <div className="flex items-center justify-between p-3 ">
                  <span className="flex gap-2 mr-24 md:mr-4">
                     <PersonIcon />
                     <p>Mi cuenta</p>
                  </span>
                  <ArrowDropDownIcon />
               </div>
               <ProfileSubmenu show={showSubmenu} />
            </li>
         </ul>
      </nav>
   );
}

export default Navbar;
