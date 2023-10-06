import React from "react";
import Link from "next/link";
//* importacion para trabajar con los iconos de React icos, revisar doc.
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
// import { AiOutlineMail } from "react-icons/ai";
// import { BsFillPersonLinesFill } from "react-icons/bs";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Construyamos algo legendario juntos
          </p>
          <h1 className="py-4 text-gray-700">
            Hola, Soy <span className="text-[#5651e5]">Alexis</span>
          </h1>
          <h1 className="py-4 text-gray-700">un Desarrollador Web Front-End</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto tracking-widest uppercase">
            El futuro es hoy, vamos a codificarlo.
          </p>
          {/* estilos para los botones */}
          <div className="flex items-center justify-center max-w-[350px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/alexis-gonzalez-971432266/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a href="/" target="_blank" rel="noreferrer">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            {/* <Link href="/#contact">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
            <Link href="/resume">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
