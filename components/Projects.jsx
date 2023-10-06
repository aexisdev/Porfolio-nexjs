// import Image from 'next/image';
// import Link from 'next/link';
import React from "react";
import Pokedex from "../public/assets/projects/pokePortada.png";
import CambioFrases from "../public/assets/projects/CambioFrases.png";
import netflixImg from "../public/assets/projects/netflix.jpg";
import twitchImg from "../public/assets/projects/twitch.jpg";
import RickAndMorty from "../public/assets/projects/RickAndMorty.jpg"
import Glasmorfismo from "../public/assets/projects/GlasmorfismoFondo.png"
import ProyectItems from "./ProyectItems";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Proyectos
        </p>
        <h2 className="py-4 ">lo que he construido</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProyectItems
            title="Pokedex"
            backgroundImg={Pokedex}
            proyectUrl="/property"
          />
          <ProyectItems
            title="Cambio Frases"
            backgroundImg={CambioFrases}
            proyectUrl="/PropertyCambioFrases"
          />
          <ProyectItems
            title="Glasmorfismo"
            backgroundImg={Glasmorfismo}
            proyectUrl="/property"
          />
          <ProyectItems
            title="Rick and Morty"
            backgroundImg={RickAndMorty}
            proyectUrl="/property"
          />
          <ProyectItems
            title="Clima App"
            backgroundImg={twitchImg}
            proyectUrl="/property"
          />
        </div>
      </div>
      <div className="text-xl uppercase text-[#5651e5] text-center ">
        <span>Hecho en Academlo con ❤️</span>
      </div>
    </div>
  );
};

export default Projects;
