// import Image from 'next/image';
// import Link from 'next/link';
import React from "react";
import propertyImg from "../public/assets/projects/property.jpg";
import cryptoImg from "../public/assets/projects/Crypto.jpg";
import netflixImg from "../public/assets/projects/netflix.jpg";
import twitchImg from "../public/assets/projects/twitch.jpg";
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
            title="Property Finder"
            backgroundImg={propertyImg}
            proyectUrl="/property"
          />
          <ProyectItems
            title="Crypto App"
            backgroundImg={cryptoImg}
            proyectUrl="/property"
          />
          <ProyectItems
            title="Property Finder"
            backgroundImg={netflixImg}
            proyectUrl="/property"
          />
          <ProyectItems
            title="Property Finder"
            backgroundImg={twitchImg}
            proyectUrl="/property"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
