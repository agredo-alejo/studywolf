import Head from "next/head";
import Link from "next/link";
import React from "react";

function Login() {
   return (
      <div className="h-[100vh] bg-lightGray flex flex-col items-center">
         <Head>
            <title>Login</title>
            <meta name="description" content="Generated by create next app" />
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <div className="px-4 mt-4 bg-white rounded-lg w-[24rem]">
            <div className="flex flex-col items-center w-full ">
               <h1 className="my-4 text-3xl font-bold">Iniciar sesion</h1>

               <form className="flex flex-col items-start w-full">
                  <div className="inputBox">
                     <label htmlFor="email">Correo:</label>
                     <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Escribe aquí"
                     />
                  </div>
                  <div className="inputBox">
                     <label htmlFor="pass">Contraseña:</label>
                     <input
                        type="password"
                        id="pass"
                        name="pass"
                        placeholder="Escribe aquí"
                     />
                  </div>

                  <button
                     type="submit"
                     className="p-2 mt-2 w-[90%] mx-auto text-white bg-buttonBlue rounded-3xl"
                  >
                     Enviar
                  </button>
               </form>
            </div>
            <div className="flex gap-1 p-4 text-sm">
               <p>¿No tienes una cuenta?</p>
               <Link href="/registro" className="text-blue-400 underline">
                  Registrate aquí
               </Link>
            </div>
         </div>
      </div>
   );
}

export default Login;