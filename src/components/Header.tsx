"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Brand } from "./ui";

const links = [["Início", "inicio"], ["Sobre", "sobre"], ["Serviços", "servicos"], ["Portfólio", "portfolio"], ["Contato", "contato"]];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("inicio");
  const toggle = useRef<HTMLButtonElement>(null);
  const nav = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: "-15% 0px -65% 0px" });
    links.forEach(([, id]) => { const node = document.getElementById(id); if (node) observer.observe(node); });
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!open) return;
    nav.current?.querySelector("a")?.focus();
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") { setOpen(false); toggle.current?.focus(); }
      if (event.key === "Tab") {
        const elements = [...(nav.current?.querySelectorAll<HTMLAnchorElement>("a") || []), toggle.current].filter(Boolean) as HTMLElement[];
        const first = elements[0], last = elements[elements.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);
  return <header className="header">
    <div className="header-inner shell">
      <Brand />
      <nav ref={nav} aria-label="Navegação principal" id="main-nav" className={`nav ${open ? "is-open" : ""}`}>
        {links.map(([name, id]) => <a key={id} href={`#${id}`} aria-current={active === id ? "location" : undefined} onClick={() => setOpen(false)}>{name}</a>)}
      </nav>
      <a className="header-cta" href="#contato">Vamos conversar <ArrowUpRight size={17} aria-hidden="true" /></a>
      <button ref={toggle} className="menu-toggle icon-button" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </div>
  </header>;
}
