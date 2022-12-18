import React, { useState, useEffect } from "react";
import Link from "next/link";
import PersonIcon from "@mui/icons-material/Person";
import InsightsIcon from "@mui/icons-material/Insights";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuth } from "@context/authContext";

const profileSubmenuItems = [
   {
      icon: <PersonIcon />,
      text: "Perfil",
      link: "/dashboard",
   },
   {
      icon: <InsightsIcon />,
      text: "Progreso",
      link: "/dashboard",
   },
   {
      icon: <SettingsIcon />,
      text: "Configuracion",
      link: "/dashboard",
   },
];

interface ProfileSubmenuProps {
   show: boolean;
}

function ProfileSubmenu({ show }: ProfileSubmenuProps) {
   const { logout } = useAuth();

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
         <li
            className="flex bg-[#2E2E2E] items-center justify-between pl-12 md:pl-3 p-3 hoverOrange"
            onClick={logout}
         >
            <p className="pr-10">Cerrar sesion</p>
            <LogoutIcon />
         </li>
      </ul>
   );
}

export default ProfileSubmenu;
