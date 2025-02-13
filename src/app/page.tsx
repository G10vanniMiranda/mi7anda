import Image from "next/image";
import Link from "next/link";
import { CiInstagram, CiMenuKebab } from "react-icons/ci";
import { FaWhatsapp, FaInstagram } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="bg-zinc-900 h-screen">
      <div className="h-full flex flex-col items-center gap-8 pt-12">

        <img className="rounded-full hover:scale-105 duration-300" width={180} src="https://avatars.githubusercontent.com/u/134082250?v=4" alt="Foto de Perfil do Giovanni" />

        <div className="flex flex-col items-center gap-1">

          <p className="text-3xl font-bold">Giovanni Miranda</p>
          <p className="">Desenvolvedor Web Full Stack</p>

        </div>

        <div className="flex gap-2">


          <FaWhatsapp className="hover:text-green-600 hover:scale-150 duration-500 cursor-pointer" />

          <CiInstagram className="hover:text-red-600 hover:scale-150 duration-500 cursor-pointer" />


        </div>

        <div className="w-full flex flex-col items-center gap-3">

          <div className="w-96 lg:w-1/4 h-20 bg-black flex justify-between items-center rounded-md cursor-pointer hover:scale-105 duration-300 p-2">
            <img src="/" alt="Foto do Site" />
            <p>GitHub</p>
            <CiMenuKebab />
          </div>

          <div className="w-96 lg:w-1/4 h-20 bg-black flex justify-between items-center rounded-md cursor-pointer hover:scale-105 duration-300 p-2">
            <img src="/" alt="Foto do Site" />
            <p>GitHub</p>
            <CiMenuKebab />
          </div>

        </div>

        <div className="fixed bottom-5">
          <p className="text-sm flex gap-1">Copyright 2025 |<Link className="border-b" href={"https://wa.me/5569999787798"}>Mi7anda.</Link></p>
        </div>

      </div>
    </div>
  );
}
