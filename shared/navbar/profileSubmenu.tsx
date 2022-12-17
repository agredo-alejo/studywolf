import React, { useState, useEffect } from "react";
import Link from "next/link";
import PersonIcon from "@mui/icons-material/Person";
import InsightsIcon from "@mui/icons-material/Insights";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

const profileSubmenuItems = [
   {
      icon: <PersonIcon />,
      text: "Perfil",
      link: "/",
   },
   {
      icon: <InsightsIcon />,
      text: "Progreso",
      link: "/",
   },
   {
      icon: <SettingsIcon />,
      text: "Configuracion",
      link: "/",
   },
   {
      icon: <LogoutIcon />,
      text: "Cerrar sesion",
      link: "/",
   },
];

interface ProfileSubmenuProps {
   show: boolean;
}

function ProfileSubmenu({ show }: ProfileSubmenuProps) {
   return (
      <ul
         className={` ${
            show ? "block" : "hidden"
         } md:z-[100] md:absolute top-[3rem]`}
      >
         {profileSubmenuItems.map(({ icon, text, link }) => (
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

export default ProfileSubmenu;
