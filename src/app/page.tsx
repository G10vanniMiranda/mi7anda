"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { BiLogoGmail } from "react-icons/bi";
import { FaWhatsapp, FaInstagram } from "react-icons/fa6";

// Componente reutilizável para os cards de projeto
type Project = {
  href: string;
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
  label?: string;
  labelClass?: string;
  aos: string;
};

const projects: Project[] = [
  {
    href: "https://github.com/G10vanniMiranda",
    imgSrc: "https://avatars.githubusercontent.com/u/134082250?v=4",
    imgAlt: "Avatar do GitHub de Giovanni Miranda",
    title: "Perfil no GitHub",
    description: "Repositórios, projetos e contribuições open source.",
    label: "GitHub",
    labelClass: "bg-zinc-800",
    aos: "fade-right",
  },
  {
    href: "https://espaco-alfa.vercel.app/",
    imgSrc: "/logosf.jpg",
    imgAlt: "Logo Espaço Alfa",
    title: "Espaço Alfa",
    description: "Landing page responsiva para estúdio com foco em conversão.",
    label: "Landing",
    labelClass: "bg-blue-800",
    aos: "fade-left",
  },
  {
    href: "https://hamburgueria-nine-chi.vercel.app/",
    imgSrc: "/burgue.jpg",
    imgAlt: "Logo Hamburgueria",
    title: "Hamburgueria",
    description: "Cardápio online com destaque de produtos e fluxo de pedido.",
    label: "E-commerce",
    labelClass: "bg-green-800",
    aos: "fade-right",
  },
  {
    href: "https://www.contabilidadess.com.br/",
    imgSrc: "/ss-cont.jpg",
    imgAlt: "Logo SS Contabilidade",
    title: "SS Contabilidade",
    description: "Site institucional com serviços, sobre e CTA para contato.",
    label: "Institucional",
    labelClass: "bg-slate-400 text-black",
    aos: "fade-left",
  },
  {
    href: "https://primeiroato.vercel.app/",
    imgSrc: "/primeiroato.png",
    imgAlt: "Logo Primeiro Ato",
    title: "Primeiro Ato",
    description: "Website com programação, eventos e informações de contato.",
    label: "Institucional",
    labelClass: "bg-rose-700",
    aos: "fade-right",
  },
  {
    href: "https://petshop-neon-delta.vercel.app/",
    imgSrc: "/petshop.jpg",
    imgAlt: "Foto de um cachorrinho",
    title: "PetShop",
    description: "Catálogo de serviços e produtos com destaque para promoções.",
    label: "Varejo",
    labelClass: "bg-purple-700",
    aos: "fade-left",
  },
  {
    href: "https://ldp-restaurante.vercel.app/",
    imgSrc: "/restaurante.jpg",
    imgAlt: "Logo Restaurante LDP",
    title: "Restaurante LDP",
    description: "Cardápio digital e informações de contato e localização.",
    label: "Food",
    labelClass: "bg-yellow-400 text-black",
    aos: "fade-up",
  },
  {
    href: "https://mahal-sushi-bar.vercel.app/",
    imgSrc: "/mahal.jpg",
    imgAlt: "Logo Mahal Sushi Bar",
    title: "Mahal Sushi Bar",
    description: "Cardápio, combos e contato com ênfase na identidade visual.",
    label: "Food",
    labelClass: "bg-cyan-700",
    aos: "fade-up",
  },
  {
    href: "https://advogadoiagozalenda.vercel.app/",
    imgSrc: "/adv-iago.jpg",
    imgAlt: "Site do Advogado Iago Zalenda",
    title: "Adv Iago Zalenda",
    description: "Landing Page completa com apresentação, serviços e CTA.",
    label: "Landing",
    labelClass: "bg-blue-800",
    aos: "fade-right",
  },
  {
    href: "https://psi-fernanda-tan.vercel.app/",
    imgSrc: "/psi-fernanda.jpg",
    imgAlt: "Site da Psicóloga Fernanda Miranda",
    title: "Psi Fernanda Miranda",
    description: "Landing Page completa com sessões, abordagem e contato.",
    label: "Landing",
    labelClass: "bg-blue-800",
    aos: "fade-left",
  },
];

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
};

function Modal({ open, onClose, title, children }: ModalProps) {
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    // foco no botão fechar
    closeBtnRef.current?.focus();
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative z-10 w-full max-w-lg rounded-lg bg-white shadow-xl">
        <div className="flex items-center justify-between border-b px-4 py-3">
          <h2 id="modal-title" className="text-base font-semibold text-gray-900">
            {title}
          </h2>
          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label="Fechar"
          >
            ✕
          </button>
        </div>
        <div className="px-4 py-4 text-gray-700">{children}</div>
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (p: Project) => void;
}) {
  if (!project.href) return null;

  return (
    <div
      data-aos={project.aos}
      data-aos-delay="500"
      className="w-full max-w-2xl bg-black rounded-lg p-4 flex items-start gap-4 hover:scale-[1.01] transition-transform duration-300"
    >
      {/* Área clicável que leva ao projeto */}
      <Link
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-start gap-4 flex-1 min-w-0"
      >
        <Image
          width={88}
          height={88}
          className="rounded-md object-cover flex-shrink-0"
          src={project.imgSrc}
          alt={project.imgAlt}
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-white text-lg font-semibold leading-tight truncate">
              {project.title}
            </h3>
            {/* Label com tamanho fixo em todos os cards */}
            <div className="shrink-0 w-24">
              {project.label && (
                <span
                  className={`inline-flex w-full h-7 items-center justify-center rounded-md text-xs text-white ${project.labelClass || ""}`}
                >
                  {project.label}
                </span>
              )}
            </div>
          </div>
          {/* Descrição vai para o modal, não exibimos aqui */}
        </div>
      </Link>

      {/* Botão maior para abrir modal de descrição */}
      <button
        type="button"
        onClick={() => onOpen(project)}
        aria-label={`Abrir detalhes de ${project.title}`}
        className="ml-auto inline-flex items-center justify-center rounded-md text-white/90 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 w-11 h-11 md:w-12 md:h-12"
      >
        <CiMenuKebab size={26} />
      </button>
    </div>
  );
}

export default function Home() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

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

      <section className="w-full flex flex-col items-center gap-4 px-3 sm:px-4">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} onOpen={setActiveProject} />
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

      {/* Modal de descrição */}
      <Modal
        open={!!activeProject}
        onClose={() => setActiveProject(null)}
        title={activeProject?.title ?? ""}
      >
        <p className="text-sm leading-6">
          {activeProject?.description}
        </p>
        <div className="mt-4 flex justify-end gap-2">
          {activeProject?.href && (
            <Link
              href={activeProject.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/80"
            >
              Visitar projeto
            </Link>
          )}
          <button
            type="button"
            onClick={() => setActiveProject(null)}
            className="inline-flex items-center justify-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Fechar
          </button>
        </div>
      </Modal>
    </main>
  );
}