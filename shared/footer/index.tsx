import Image from "next/image";
import React from "react";
import FooterCols from "./footerCols";

function Footer() {
   return (
      <footer className="w-full bg-[#202020] text-white">
         <FooterCols />
         <div className="flex flex-col gap-2 p-2 border-t-2 border-white md:flex-row">
            <p className="pr-2 md:border-r-2">
               © 2019 Todos los derechos reservados
            </p>
            <p> Alejandro Agredo Portilla</p>
         </div>
      </footer>
   );
}

export default Footer;
