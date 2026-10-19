"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { ArrowUpRight, Plus } from "lucide-react";
import { categories, portfolio, type Category } from "@/data/portfolio";
import { Eyebrow } from "./ui";

const Lightbox = dynamic(() => import("./Lightbox"));

export default function Portfolio() {
  const [category, setCategory] = useState<Category>("Todos");
  const [index, setIndex] = useState<number | null>(null);
  const projects = portfolio.filter((project) => category === "Todos" || project.category === category);
  return <section id="portfolio" className="portfolio-section section-space" aria-labelledby="portfolio-title">
    <div className="shell">
      <div className="section-intro" data-reveal><div><Eyebrow number="02">PORTFÓLIO SELECIONADO</Eyebrow><h2 id="portfolio-title">Nosso trabalho.<br /><span className="muted">Em cada detalhe.</span></h2></div><p>As cores, os relevos, a identidade.<br />Conheça peças que receberam nosso<br className="desktop-break" /> trabalho de pintura e acabamento.</p></div>
      <div className="portfolio-toolbar"><div className="filters" role="group" aria-label="Filtrar portfólio">{categories.map((item) => <button key={item} aria-pressed={category === item} onClick={() => { setCategory(item); setIndex(null); }}>{item}{category === item && <span>{String(projects.length).padStart(2, "0")}</span>}</button>)}</div><span className="portfolio-hint"><Plus size={13} /> CLIQUE PARA EXPLORAR</span></div>
      <p role="status" className="sr-only">{projects.length} trabalhos na categoria {category}.</p>
      <div className={`portfolio-grid ${category !== "Todos" ? "filtered" : ""}`}>
        {projects.map((project, itemIndex) => <article key={project.id} className={`project project-${project.id}`}>
          <button className="project-image-button" aria-label={`Ampliar: ${project.name}`} onClick={() => setIndex(itemIndex)}>
            <Image src={project.image} alt={project.alt} fill sizes="(max-width: 600px) 95vw, (max-width: 1000px) 50vw, 58vw" style={{ objectPosition: project.position }} />
            <span className="project-category">{project.category}</span><span className="project-open"><ArrowUpRight size={22} strokeWidth={1.5} /></span><span className="project-hover-label">VER OS DETALHES <Plus size={14} /></span>
          </button>
          <div className="project-caption"><h3>{project.name}</h3><span className="project-number">{String(portfolio.indexOf(project) + 1).padStart(2, "0")}</span></div>
        </article>)}
      </div>
      <div className="portfolio-foot"><span className="live-dot" /><p>Peças reais. Histórias diferentes. O mesmo cuidado no acabamento.</p><a href="#contato" className="text-link">Vamos criar a próxima? <ArrowUpRight size={17} /></a></div>
    </div>
    {index !== null && <Lightbox projects={projects} index={index} onNavigate={setIndex} onClose={() => setIndex(null)} />}
  </section>;
}
