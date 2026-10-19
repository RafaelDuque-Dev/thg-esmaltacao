"use client";
import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Project } from "@/data/portfolio";

export default function Lightbox({ projects, index, onClose, onNavigate }: { projects: Project[]; index: number; onClose: () => void; onNavigate: (index: number) => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const project = projects[index];
  const navigate = useCallback((delta: number) => onNavigate((index + delta + projects.length) % projects.length), [index, projects.length, onNavigate]);
  useEffect(() => {
    const node = dialog.current;
    const previous = document.activeElement as HTMLElement | null;
    node?.showModal();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { node?.close(); document.body.style.overflow = overflow; previous?.focus(); };
  }, []);
  return <dialog ref={dialog} className="lightbox" aria-labelledby="lightbox-title" onCancel={onClose} onClick={(event) => { if (event.target === event.currentTarget) onClose(); }} onKeyDown={(event) => { if (event.key === "ArrowRight") { event.preventDefault(); navigate(1); } if (event.key === "ArrowLeft") { event.preventDefault(); navigate(-1); } }}>
    <div className="lightbox-toolbar"><span className="eyebrow">ACERVO THG <span className="muted">/ {String(index + 1).padStart(2, "0")} DE {String(projects.length).padStart(2, "0")}</span></span><button className="icon-button" onClick={onClose} aria-label="Fechar imagem"><X /></button></div>
    <div className="lightbox-stage"><button className="icon-button lightbox-prev" aria-label="Imagem anterior" onClick={() => navigate(-1)}><ChevronLeft /></button><Image key={project.id} src={project.image} alt={project.alt} width={project.width} height={project.height} sizes="(max-width: 700px) 90vw, 75vw" className="lightbox-image" style={{ maxWidth: `min(100%, ${project.width}px)` }} /><button className="icon-button lightbox-next" aria-label="Próxima imagem" onClick={() => navigate(1)}><ChevronRight /></button></div>
    <div className="lightbox-caption" aria-live="polite"><div><p className="eyebrow">{project.category} · PINTURA E ACABAMENTO</p><h2 id="lightbox-title">{project.name}</h2></div><p>{project.description}</p></div>
  </dialog>;
}
