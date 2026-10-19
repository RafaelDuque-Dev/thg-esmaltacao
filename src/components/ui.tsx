import { ArrowUpRight } from "lucide-react";
import { company } from "@/data/company";

export function Brand({ footer = false }: { footer?: boolean }) {
  return <a href="#inicio" className={`brand ${footer ? "brand-footer" : ""}`} aria-label={`${company.name} — início`}>
    <span className="brand-letters">THG</span>
    <span className="brand-sub">ESMALTAÇÃO<span className="brand-colors"><i /><i /><i /><i /></span></span>
  </a>;
}

export function Eyebrow({ children, number }: { children: React.ReactNode; number?: string }) {
  return <p className="eyebrow">{number && <span className="section-number">{number} /</span>}{children}</p>;
}

export function Button({ href, children, outline = false, className = "", external = false }: { href: string; children: React.ReactNode; outline?: boolean; className?: string; external?: boolean }) {
  return <a href={href} className={`button magnetic ${outline ? "button-outline" : "button-primary"} ${className}`} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
    <span>{children}</span><ArrowUpRight size={18} strokeWidth={1.7} aria-hidden="true" />
  </a>;
}
