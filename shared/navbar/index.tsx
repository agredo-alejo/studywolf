import React, { useState, useRef } from "react";
import Link from "next/link";
import ProfileSubmenu from "./profileSubmenu";
import Topbar from "./topbar";
import HomeIcon from "@mui/icons-material/Home";
import StorageIcon from "@mui/icons-material/Storage";
import PersonIcon from "@mui/icons-material/Person";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useClickOutside } from "@utils/useClickOutside";
import CoursesSubmenu from "./coursesSubmenu";

function Navbar() {
   const [showProfileSubmenu, setShowProfileSubmenu] = useState(false);
   const [showCoursesSubmenu, setShowCoursesSubmenu] = useState(false);
   const [showMenu, setShowMenu] = useState(false);
   const navRef = useRef<HTMLElement | null>(null);

   const toggleMenu = () => {
      setShowMenu((showMenu) => !showMenu);
   };

   const toggleProfileSubmenu = () => {
      setShowProfileSubmenu((show) => !show);
   };
   const toggleCoursesSubmenu = () => {
      setShowCoursesSubmenu((show) => !show);
   };

   useClickOutside(navRef, () => {
      setShowMenu(false);
      setShowProfileSubmenu(false);
      setShowCoursesSubmenu(false);
   });

   return (
      <nav
         ref={navRef}
         className="fixed z-50 w-full text-white md:flex md:justify-center "
      >
         <Topbar toggle={toggleMenu} />
         <ul
            className={`bg-[#202020] pb-12 overflow-y-scroll md:overflow-y-visible hideScrollbar navUl md:relative ${
               showMenu ? "left-0" : "left-[-100%]"
            } md:left-0 md:flex-row md:h-fit md:pb-0 md:top-1`}
         >
            <li>
               <Link
                  href="/dashboard"
                  className="flex gap-2 p-3 md:px-4 hoverOrange"
               >
                  <HomeIcon />
                  <p>Inicio</p>
               </Link>
            </li>

            <li className="hoverOrange" onClick={toggleCoursesSubmenu}>
               <div className="flex items-center justify-between p-3 ">
                  <span className="flex gap-2 mr-24 md:mr-4">
                     <StorageIcon />
                     <p>Cursos</p>
                  </span>
                  <ArrowDropDownIcon />
               </div>
               <CoursesSubmenu show={showCoursesSubmenu} />
            </li>

            <li className="hoverOrange" onClick={toggleProfileSubmenu}>
               <div className="flex items-center justify-between p-3 ">
                  <span className="flex gap-2 mr-24 md:mr-4">
                     <PersonIcon />
                     <p>Mi cuenta</p>
                  </span>
                  <ArrowDropDownIcon />
               </div>
               <ProfileSubmenu show={showProfileSubmenu} />
            </li>
         </ul>
      </nav>
   );
}

export default Navbar;
