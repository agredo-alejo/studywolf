import Footer from "@shared/footer";
import Navbar from "@shared/navbar";
import WithAuth from "@utils/withAuth";
import Head from "next/head";
import Image from "next/image";
import React from "react";

function Maths() {
   return (
      <WithAuth>
         <div className="min-h-[100vh] h-full bg-lightGray flex flex-col items-center">
            <Head>
               <title>Matemáticas</title>
               <meta
                  name="description"
                  content="Generated by create next app"
               />
               <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1"
               />
               <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <div className="h-full mt-16 w-[80vw] max-w-2xl">
               <h2 className="text-xl font-medium">Matemáticas</h2>

               <div className="flex flex-wrap justify-center gap-2 p-2 mb-4 overflow-hidden bg-white rounded-xl">
                  <iframe
                     className="w-full aspect-video"
                     src="https://www.youtube.com/embed/2TLB5TdSwBA"
                     title="YouTube video player"
                     frameBorder="0"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     allowFullScreen
                  ></iframe>
               </div>
               <div className="p-2 mb-4 bg-white rounded-xl">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
                  in eos eveniet, mollitia facilis laborum enim deleniti, dolor
                  nesciunt animi sit, officiis magnam. Quis nulla commodi
                  provident voluptas. Est, numquam?
               </div>
            </div>
            <Footer />
         </div>
      </WithAuth>
   );
}

export default Maths;
