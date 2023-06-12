import Image from 'next/image';
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import ContactImg from "../public/assets/contact.jpg";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contáctame
        </p>
        <h2 className="py-4  ">Ponte en contacto conmigo.</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
								<Image
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src={ContactImg}
                  alt='/'
                />
              </div>
              <div>
                <h2 className="py-2">Alexis Gonzalez</h2>
                <p>Desarrollador Web Front-End</p>
                <p className="py-4">
                  Si te ha gustado lo que viste dejame un mensaje y me pondre en contacto contigo.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Contacta conmigo.</p>
                <div className="flex items-center justify-between py-4">
									<a
										href='https://www.linkedin.com/in/alexis-gonzalez-971432266/'
										target='_blank'
										rel='noreferrer'
									>
										<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
											<FaLinkedinIn />
										</div>
									</a>
									<a
										href='https://github.com/fireclint'
										target='_blank'
										rel='noreferrer'
									>
										<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
											<FaGithub />
										</div>
									</a>

									<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
										<AiOutlineMail />
									</div>
									<Link href='/resume'>
										
											<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
												<BsFillPersonLinesFill />
											</div>
										
									</Link>
                </div>
              </div>
            </div>
          </div>
          {/* rigth */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form 
								action='https://getform.io/f/08ebcd37-f5b5-45be-8c13-714f011ce060'
                method='POST'
							
							>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Nombre</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
											name='name'
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Numero de telefono
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
											name='phone'
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Correo</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
										name='email'
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Sujeto</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
										name='subject'
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Mensaje</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
										name='message'
                  ></textarea>
                </div>
                <button className="w-full p-4 text-gray-100 mt-4 bg-[#635eed]">
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
