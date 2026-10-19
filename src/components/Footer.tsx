import { ArrowUp, ArrowUpRight, MessageCircle } from "lucide-react";
import { company, whatsappUrl } from "@/data/company";
import { Brand } from "./ui";

export default function Footer() {
  return <><footer className="footer shell"><div className="footer-top"><Brand footer /><p>Pintura em resina.<br />Identidade em metal.</p><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="text-link">Vamos conversar <ArrowUpRight size={18} /></a><a href="#inicio" className="back-top icon-button" aria-label="Voltar ao início"><ArrowUp size={20} /></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} {company.name}. Todos os direitos reservados.</span><span>O ACABAMENTO FAZ A DIFERENÇA.</span><a href="/privacidade/">Privacidade</a></div></footer><a className="floating-whatsapp" href={whatsappUrl()} aria-label="Conversar com a THG pelo WhatsApp" target="_blank" rel="noopener noreferrer"><MessageCircle size={23} strokeWidth={1.7} /><span>Vamos conversar</span><ArrowUpRight size={15} /></a></>;
}
