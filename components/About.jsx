import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            Sobre mi
          </p>
          <h2 className="py-2 text-gray-800">Quien soy</h2>
          <p className="py-2 text-gray-600">No soy un desarrollador web normal.</p>
          <p className="py-2 text-gray-600">
            Me defino como un apasionado, aprender y crear se a vuelto para mi una forma de vida.
          </p>
          <p className="py-2 text-gray-600">
            Buscar nuevos retos y superarlos define mi desarrollo como persona y profesional.
          </p>
          {/* <p className="py-2 text-gray-600 underline cursor-pointer">
            Chequea mis ultimos proyectos.
          </p> */}
        </div>
        <div className=" w-full h-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
