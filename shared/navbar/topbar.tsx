import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

interface TopbarProps {
   toggle: () => void;
}

function Topbar({ toggle }: TopbarProps) {
   return (
      <div className="flex p-2 md:hidden bg-[#202020] " onClick={toggle}>
         <span>
            <MenuIcon className="text-[2rem]" />
         </span>
         <p className="flex items-center justify-center w-full text-2xl font-semibold">
            Study Wolf
         </p>
      </div>
   );
}

export default Topbar;
