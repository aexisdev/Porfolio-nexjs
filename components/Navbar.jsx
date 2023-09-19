//* importacion para trabajar con imagenes en next.js/ revisar doc
import Image from "next/image";
//* importacion para trabajar con link en next.js/ revisar doc
import Link from "next/link";
import React, { useState, useEffect } from "react";
//* importacion para trabajar con los iconos de React icos, revisar doc.
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Router, useRouter } from "next/router";
// CREAR MI LOGO
import NavLogo from "../public/assets/exissLogo.png";
//  Importando el icono en svg de la luna.
// import sun from "../public/sun.svg"
// import moon from "../public/moon.svg"

const Navbar = () => {
  //? estado para los estilos del menu desplegable
  const [nav, setNav] = useState(false);

  //? estado para la sombra del nav
  const [shadow, setShadow] = useState(false);

  //? estosdod para el fondo de las ventanas de los proyectos.
  const [navBg, setNavBg] = useState("#ecf0f3");
  //? estados del color de los links.
  const [linkColor, setLinkColor] = useState("#1f2937");

  //? logica del uso de las ventanas de los proyectos.
  useEffect(() => {
    if (
      Router.asPath === "/property" ||
      Router.asPath === "/property" ||
      Router.asPath === "/property" ||
      Router.asPath === "/property" ||
      Router.asPath === "/property"
    ) {
      setNav("trasnparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
    }
  }, []);

  //? funcion para altenar el menu.
  const handleNav = () => {
    setNav(!nav);
  };

  //?Usando el useEffect.
  useEffect(() => {
    const handlesShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handlesShadow);
  }, []);
	

//? //////////////////////////////////////////////////
  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      id="navbar"
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300"
          : "fixed w-full h-20  z-[100]"
      }
    >
      {/* -----------------LOGO------------------------ */}
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/#home">
          <Image
            src={NavLogo}
            alt=""
            width="80"
            height="50"
            className="cursor-pointer"
          />
        </Link>
        {/* ----------------ENLACES DEL MENU ESCRITORIO---------------- */}
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/">Principal</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="#about">Sobre Mi</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="#skills">Habilidades</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="#projects">Proyectos</Link>
            </li>
            {/* <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="#resume">Resumen</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="#contact">Contacto</Link>
            </li> */}
          </ul>
          {/* Icono de hamburguesa  */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className="md:hidden ml-80"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
        {/* //? espacio para crear los botones para cambiar al modo oscuro y claro. */}
				{/* <div>
					<button className='bg-black/70 p-2'>
						<Image src={sun} /> 
					</button> 
				</div> */}

        {/* ---------------SECCION DEL MENU VERSION MOVIL------------------ */}
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
              : " "
          }
        >
          {/* ---------------- CONTENEDOR DEL MENU VERSION MOVIL---------------- */}
          <div
            className={
              nav
                ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
            }
          >
            {/* CABECERA DEL MENU DESPLEGABLE */}
            <div>
              <div className="flex w-full items-center justify-between">
                <Link href="/#home">
                  <Image
                    src={NavLogo}
                    onClick={() => setNav(false)}
                    width="70"
                    height="20"
                    alt="/"
                  />
                </Link>
                <div
                  onClick={handleNav}
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                >
                  <AiOutlineClose />
                </div>
              </div>
              <div className="border-b boder-gray-300 my-4">
                <p className="w-[85%] md:w-[90%] py-4">
                  Construyamos algo legendario juntos
                </p>
              </div>
            </div>
            {/* CONTENEDOR DE LOS ENLACES  */}
            <div className="py-4 flex flex-col">
              <ul className="uppercase">
                <Link href="/">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Principal
                  </li>
                </Link>
                <Link href="/#about">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Sobre Mi
                  </li>
                </Link>
                <Link href="/#skills">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Habilidades
                  </li>
                </Link>
                <Link href="/#projects">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Proyectos
                  </li>
                </Link>
                {/* <Link href="/#contact">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Contacto
                  </li>
                </Link> */}
              </ul>
              {/* CONTENEDOR DE LOS ICONOS/ MENU MOVIL  */}
              <div className="pt-20">
                <p className="uppercase tracking-widest text-[#5651e5]">
                  VAMOS A CONECTAR
                </p>
                <div className="flex items-center justify-center my-4 w-full sm:w-[80%]">
                  <a
                    href="https://www.linkedin.com/in/alexis-gonzalez-971432266/"
                    target="_black"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a href="https://github.com/aexisdev" target="_black" rel="noreferrer">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>
                  {/* <Link href="/#contact">
                    <div
                      onClick={() => setNav(!nav)}
                      className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                    >
                      <AiOutlineMail />
                    </div>
                  </Link>
                  <Link href="/resume">
                    <div
                      onClick={() => setNav(!nav)}
                      className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                    >
                      <BsFillPersonLinesFill />
                    </div>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
