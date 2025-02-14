import Link from "next/link";
import { CiMenuKebab } from "react-icons/ci";
import { FaWhatsapp, FaInstagram } from "react-icons/fa6";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-zinc-900 h-screen">

      <div className="w-full flex flex-col items-center gap-6 pt-12 relative">

        <img data-aos="fade-down" data-aos-delay="500" className="rounded-full hover:scale-105 duration-300" width={180} src="https://avatars.githubusercontent.com/u/134082250?v=4" alt="Foto de Perfil do Giovanni" />

        <div data-aos="fade-up" data-aos-delay="500" className="flex flex-col items-center gap-3" >
          <div className="flex flex-col items-center gap-1">

            <p className="text-3xl font-bold">Giovanni Miranda</p>
            <p className="">Desenvolvedor Web Full Stack</p>

          </div>

          <div className="flex gap-2">

            <Link href={"https://wa.me/5569999787798"}>
              <FaWhatsapp size={30} className="hover:text-green-600 hover:scale-150 duration-500 cursor-pointer" />
            </Link>

            <Link href={"https://www.instagram.com/giovanni96miranda/?__pwa=1#"}>
              <FaInstagram size={30} className="hover:text-red-600 hover:scale-150 duration-500 cursor-pointer" />
            </Link>

          </div>
        </div>

        <div className="w-full flex flex-col items-center gap-3">

          <div data-aos="fade-right" data-aos-delay="500" className="w-96 lg:w-1/4 h-20 bg-black flex justify-between items-center rounded-md cursor-pointer hover:scale-105 duration-300 p-2">
            <img width={50} height={20} className="rounded-md" src="/perfil.png" alt="Foto do Site" />
            <p className=" rounded-md p-2 px-5 bg-zinc-800">GitHub</p>
            <CiMenuKebab />
          </div>

          <div data-aos="fade-left" data-aos-delay="500" className="w-96 lg:w-1/4 h-20 bg-black flex justify-between items-center rounded-md cursor-pointer hover:scale-105 duration-300 p-2">
            <Image width={50} height={20} className="rounded-md" src="/react-js.png" alt="Foto do Site" />
            <p className="flex justify-between gap-2"> <span className="p-2 px-5 bg-blue-500 rounded-md" >React Js</span> </p>
            <CiMenuKebab />
          </div>

          <div data-aos="fade-right" data-aos-delay="500" className="w-96 lg:w-1/4 h-20 bg-black flex justify-between items-center rounded-md cursor-pointer hover:scale-105 duration-300 p-2">
            <Image width={50} height={20} className="rounded-md" src="/mobile.jpg" alt="Foto do Site" />
            <p className="flex justify-between gap-2"> <span className="p-2 px-5 bg-green-500 rounded-md" >React Native</span> </p>
            <CiMenuKebab />
          </div>

          <div data-aos="fade-left" data-aos-delay="500" className="w-96 lg:w-1/4 h-20 bg-black flex justify-between items-center rounded-md cursor-pointer hover:scale-105 duration-300 p-2">
            <Image width={50} height={20} className="rounded-md" src="/nextjs.jpg" alt="Foto do Site" />
            <p className="p-2 px-5 bg-slate-400 rounded-md">Next Web</p>
            <CiMenuKebab />
          </div>

          <div data-aos="fade-right" data-aos-delay="500" className="w-96 lg:w-1/4 h-20 bg-black flex justify-between items-center rounded-md cursor-pointer hover:scale-105 duration-300 p-2">
            <Image width={50} height={20} className="rounded-md" src="/nestjs-prisma.png" alt="Foto do Site" />
            <p className="p-2 px-5 bg-rose-700 rounded-md">Nest Backend</p>
            <CiMenuKebab />
          </div>

        </div>

        <div className="w-52 mt-7 flex justify-center items-center ">
          <p className="text-sm flex gap-1 justify-center text-center">Copyright 2025 |<Link className="border-b" href={"https://wa.me/5569999787798"}>Mi7anda.</Link></p>
        </div>

      </div>
    </div>
  );
}
