import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-zinc-900 h-screen">
      <div className="h-full flex flex-col justify-center items-center gap-5">
        <img className="rounded-full" width={180} src="https://avatars.githubusercontent.com/u/134082250?v=4" alt="Foto de Perfil do Giovanni" />

        <div className="flex flex-col items-center gap-1">
          <p className="text-3xl font-bold">Giovanni Miranda</p>
          <p className="">Desenvolvedor Full Stack</p>
        </div>

        <div className="flex gap-5">
          <h1 className="bg-black rounded-md p-2">#</h1>
          <h1 className="bg-black rounded-md p-2">#</h1>
        </div>

        <div className="w-96 lg:w-1/4 h-20 bg-black flex justify-between items-center rounded-md cursor-pointer hover:scale-105 duration-300 p-2">
          <img src="/" alt="Foto do Site" />
          <p>GitHub</p>
          <h2>#</h2>
        </div>

        <div className="w-96 lg:w-1/4 h-20 bg-black flex justify-between items-center rounded-md cursor-pointer hover:scale-105 duration-300 p-2">
          <img src="/" alt="Foto do Site" />
          <p>GitHub</p>
          <h2>#</h2>
        </div>

        <div className="mt-60">
          <p className="text-sm flex gap-1">Copyright 2025 |<Link className="border-b" href={"https://wa.me/5569999210459"}>Mi7anda.</Link></p>
        </div>
      </div>
    </div>
  );
}
