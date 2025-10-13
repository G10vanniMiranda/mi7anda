import Link from "next/link";
import Image from "next/image";
import { CiMenuKebab } from "react-icons/ci";
import { BiLogoGmail } from "react-icons/bi";
import { FaWhatsapp, FaInstagram } from "react-icons/fa6";

// Componente reutilizável para os cards de projeto
type Project = {
  href: string;
  imgSrc: string;
  imgAlt: string;
  label: string;
  labelClass: string;
  aos: string;
};

const projects: Project[] = [
  {
    href: "https://github.com/G10vanniMiranda",
    imgSrc: "https://avatars.githubusercontent.com/u/134082250?v=4",
    imgAlt: "Avatar do GitHub de Giovanni Miranda",
    label: "GitHub",
    labelClass: "bg-zinc-800",
    aos: "fade-right",
  },
  {
    href: "https://espaco-alfa.vercel.app/",
    imgSrc: "/logosf.jpg",
    imgAlt: "Logo Espaço Alfa",
    label: "Espaço Alfa",
    labelClass: "bg-blue-800",
    aos: "fade-left",
  },
  {
    href: "https://hamburgueria-nine-chi.vercel.app/",
    imgSrc: "/burgue.jpg",
    imgAlt: "Logo Hamburgueria",
    label: "Hamburgueria",
    labelClass: "bg-green-800",
    aos: "fade-right",
  },
  // Só renderiza se tiver href válido
  {
    href: "https://www.contabilidadess.com.br/",
    imgSrc: "/ss-cont.jpg",
    imgAlt: "Logo SS Contabilidade",
    label: "SS Contabilidade",
    labelClass: "bg-slate-400",
    aos: "fade-left",
  },
  {
    href: "https://primeiroato.vercel.app/",
    imgSrc: "/primeiroato.png",
    imgAlt: "Logo Primeiro Ato",
    label: "Primeiro Ato",
    labelClass: "bg-rose-700",
    aos: "fade-right",
  },
  {
    href: "https://petshop-neon-delta.vercel.app/",
    imgSrc: "/petshop.jpg",
    imgAlt: "Cachorrinho",
    label: "PetShop",
    labelClass: "bg-purple-700",
    aos: "fade-left",
  },
  {
    href: "https://ldp-restaurante.vercel.app/",
    imgSrc: "/restaurante.jpg",
    imgAlt: "Logo Restaurante",
    label: "Restaurante LDP",
    labelClass: "bg-yellow-400",
    aos: "fade-up",
  },
];

function ProjectCard({ project }: { project: Project }) {

  if (!project.href) return null;

  return (

    <Link
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      data-aos={project.aos}
      data-aos-delay="500"
      className="w-full max-w-md h-20 bg-black flex justify-between items-center rounded-md cursor-pointer hover:scale-105 duration-300 p-3"
    >
      <Image
        width={50} height={20}
        className="rounded-md"
        src={project.imgSrc}
        alt={project.imgAlt}
      />

      <p className={`w-40 p-2 px-5 text-center text-white rounded-md ${project.labelClass}`}>{project.label}</p>

      <CiMenuKebab className="text-white" />

    </Link>

  );
}

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center gap-6 pt-12 relative bg-slate-500 overflow-x-hidden">

      <section className="flex flex-col items-center gap-3">

        <Image
          data-aos="fade-down"
          data-aos-delay="500"
          className="rounded-lg hover:scale-105 duration-300"
          width={150}
          height={150}
          src="/perfil.png"
          alt="Foto de Perfil do Giovanni Miranda"
          priority
        />

        <div data-aos="fade-up" data-aos-delay="500" className="flex flex-col items-center gap-3">

          <div className="flex flex-col items-center gap-1">
            <p className="text-3xl font-bold">Giovanni Miranda</p>
            <p>Desenvolvedor Full Stack</p>
          </div>

          <div className="flex gap-2">

            <Link href="https://wa.me/5569999787798" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={30} className="hover:text-green-600 hover:scale-150 duration-500 cursor-pointer" />
            </Link>

            <Link href="https://www.instagram.com/giovanni96miranda/?__pwa=1#" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} className="hover:text-red-600 hover:scale-150 duration-500 cursor-pointer" />
            </Link>

            <Link href="mailto:giovannimiranda09@gmail.com" aria-label="Gmail">
              <BiLogoGmail size={30} className="hover:text-blue-600 hover:scale-150 duration-500 cursor-pointer" />
            </Link>

          </div>

        </div>

      </section>

      <section className="w-full flex flex-col items-center gap-3 px-2">

        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}

      </section>

      <footer className="w-52 flex justify-center items-center mt-8">

        <p className="text-sm flex gap-1 justify-center text-center">

          Copyright 2025 |

          <Link className="border-b hover:text-green-600" href="https://wa.me/5569999787798" target="_blank" rel="noopener noreferrer">
            Mi7anda.
          </Link>

        </p>

      </footer>

    </main>
  );
}