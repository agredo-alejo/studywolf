import React from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import Image from "next/image";
import { socialMedia } from "@utils/footerSocialMedia";

function FooterCols() {
   return (
      <div className="flex flex-col w-full md:flex-row">
         <div className="w-full p-4">
            <h2 className="text-xl font-semibold">Acerca de nosotros</h2>
            <p className="text-sm text-[#aaa]">
               Hola a todos study wolf es una pagina web diseñada para aprender
               sobre el desarrollo web y para probar ideas sobre una verdadera
               pagina de cursos online orientada hacia estudiantes de todas las
               edades
            </p>
         </div>
         <div className="w-full p-4">
            <h2 className="text-xl font-semibold">
               Siguenos en redes sociales
            </h2>
            <div className="flex ">
               {socialMedia.map(({ photoURL, link, alt }) => (
                  <a
                     target="_blank"
                     key={photoURL}
                     href={link}
                     className="relative flex h-8 m-1 overflow-hidden rounded-full aspect-square"
                  >
                     <Image src={photoURL} alt={alt} fill />
                  </a>
               ))}
            </div>
         </div>
         <div className="w-full p-4 text-[#aaa]">
            <h2 className="text-xl font-semibold text-white">Contacto</h2>
            <div className="my-2">
               <span className="flex gap-1">
                  <MailOutlineIcon />
                  <p>Correo electronico:</p>
               </span>
               <a target="_blank" href="mailto:agredoalejo@gmail.com">
                  agredoalejo@gmail.com
               </a>
            </div>
            <div>
               <span className="flex gap-1">
                  <PhoneIcon />
                  <p>Telefono:</p>
               </span>
               <a target="_blank" href="tel:+573245175250">
                  +57 3245175250
               </a>
            </div>
         </div>
      </div>
   );
}

export default FooterCols;
