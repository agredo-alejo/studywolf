import React, { useState, useEffect } from "react";
import Link from "next/link";
import PersonIcon from "@mui/icons-material/Person";
import InsightsIcon from "@mui/icons-material/Insights";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuth } from "@context/authContext";
import DevicesIcon from "@mui/icons-material/Devices";
import CalculateIcon from "@mui/icons-material/Calculate";
import BiotechIcon from "@mui/icons-material/Biotech";
import ScienceIcon from "@mui/icons-material/Science";
import ForestIcon from "@mui/icons-material/Forest";
const CoursesSubmenuItems = [
   {
      icon: <CalculateIcon />,
      text: "Matemáticas",
      link: "/cursos/maths",
   },
   {
      icon: <ScienceIcon />,
      text: "Ciencias",
      link: "/cursos/ciencias",
   },
   {
      icon: <DevicesIcon />,
      text: "Tecnología",
      link: "/cursos/tech",
   },
   {
      icon: <ForestIcon />,
      text: "Biología",
      link: "/cursos/bio",
   },
];

interface CoursesSubmenuProps {
   show: boolean;
}

function CoursesSubmenu({ show }: CoursesSubmenuProps) {
   return (
      <ul
         className={` ${
            show ? "block" : "hidden"
         } md:z-[100] md:absolute top-[3rem]`}
      >
         {CoursesSubmenuItems.map(({ icon, text, link }) => (
            <li key={text + link}>
               <Link
                  href={link}
                  className="flex bg-[#2E2E2E] items-center justify-between pl-12 md:pl-3 p-3 hoverOrange"
               >
                  <p className="pr-10">{text}</p>
                  {icon}
               </Link>
            </li>
         ))}
      </ul>
   );
}

export default CoursesSubmenu;
