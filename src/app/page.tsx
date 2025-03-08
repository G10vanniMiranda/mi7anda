import Link from "next/link";
import Image from "next/image";
import { CiMenuKebab } from "react-icons/ci";
import { BiLogoGmail } from "react-icons/bi";
import { FaWhatsapp, FaInstagram } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="w-screen h-screen">

      <div className="w-full h-full flex flex-col items-center gap-6 pt-12 relative">

        <img data-aos="fade-down" data-aos-delay="500" className="rounded-lg hover:scale-105 duration-300" width={150} height={150} src="/perfil.png" alt="Foto de Perfil do Giovanni" />

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

            <Link href={"mailto:giovannimiranda09@gmail.com"}>
              <BiLogoGmail size={30} className="hover:text-blue-600 hover:scale-150 duration-500 cursor-pointer" />
            </Link>

          </div>
        </div>

        <div className="w-full flex flex-col items-center gap-3">


          <Link href={"https://github.com/G10vanniMiranda"} data-aos="fade-right" data-aos-delay="500" className="w-80 md:w-3/4 lg:max-w-4xl h-20 bg-black flex justify-between items-center rounded-md cursor-pointer hover:scale-125 duration-300 p-3">
            <img width={50} height={20} className="rounded-md" src="https://avatars.githubusercontent.com/u/134082250?v=4" alt="Foto do Site" />
            <p className="w-36 p-2 px-5 text-center text-white rounded-md bg-zinc-800">GitHub</p>
            <CiMenuKebab />
          </Link>

          <Link href={"https://espaco-alfa.vercel.app/"} data-aos="fade-left" data-aos-delay="500" className="w-80 md:w-3/4 lg:max-w-4xl h-20 bg-black flex justify-between items-center rounded-md cursor-pointer hover:scale-105 duration-300 p-3">
            <Image width={50} height={20} className="rounded-md" src="/logosf.jpg" alt="Foto do Site" />
            <p className="w-36 p-2 px-5 text-center text-white rounded-md bg-blue-800"> Espaço Alfa </p>
            <CiMenuKebab />
          </Link>

          <Link href={"https://hamburgueria-nine-chi.vercel.app/"} data-aos="fade-right" data-aos-delay="500" className="w-80 md:w-3/4 lg:max-w-4xl h-20 bg-black flex justify-between items-center rounded-md cursor-pointer hover:scale-105 duration-300 p-3">
            <Image width={50} height={20} className="rounded-md" src="/burgue.jpg" alt="Foto do Site" />
            <p className="w-36 p-2 px-5 text-center text-white rounded-md bg-green-800"> Hamburgueria </p>
            <CiMenuKebab />
          </Link>

          <Link href={""} data-aos="fade-left" data-aos-delay="500" className="w-80 md:w-3/4 lg:max-w-4xl h-20 bg-black flex justify-between items-center rounded-md cursor-pointer hover:scale-105 duration-300 p-3">
            <Image width={50} height={20} className="rounded-md" src="/nextjs.jpg" alt="Foto do Site" />
            <p className="w-36 p-2 px-5 bg-slate-400 rounded-md text-center text-white">Next Web</p>
            <CiMenuKebab />
          </Link>

          <Link href={""} data-aos="fade-right" data-aos-delay="500" className="w-80 md:w-3/4 lg:max-w-4xl h-20 bg-black flex justify-between items-center rounded-md cursor-pointer hover:scale-105 duration-300 p-3">
            <Image width={50} height={20} className="rounded-md" src="/nestjs-prisma.png" alt="Foto do Site" />
            <p className="w-36 p-2 px-5 bg-rose-700 rounded-md text-center text-white">Nest Backend</p>
            <CiMenuKebab />
          </Link>

        </div>

        <div className="w-52 flex justify-center items-center ">
          <p className="text-sm flex gap-1 justify-center text-center">Copyright 2025 |<Link className="border-b hover:text-green-600" href={"https://wa.me/5569999787798"}>Mi7anda.</Link></p>
        </div>

      </div>

    </div>
  );
}
