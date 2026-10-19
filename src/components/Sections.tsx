import Image from "next/image";
import { ArrowUpRight, Check, Layers3, Palette, ScanLine, Shapes } from "lucide-react";
import { Button, Eyebrow } from "./ui";

export function About() {
  return <section className="about-section section-space shell" id="sobre" aria-labelledby="about-title">
    <div className="about-topline"><Eyebrow number="01">A ESSÊNCIA DO NOSSO TRABALHO</Eyebrow><span className="mono muted">METAL + RESINA + INTENÇÃO</span></div>
    <div className="about-grid"><div className="about-photo" data-reveal><Image src="/images/portfolio/vai-vai.webp" alt="Close de emblemas metálicos com fundo preto em resina e detalhes dourados" fill sizes="(max-width: 800px) 95vw, 45vw" /><span className="photo-note">O ACABAMENTO CONTA A HISTÓRIA.</span></div><div className="about-copy" data-reveal><h2 id="about-title">Cada detalhe<br />faz a <em>diferença.</em></h2><p>Na THG Esmaltação, valorizamos o que torna cada peça única. Trabalhamos com pintura em resina aplicada a peças metálicas, transformando projetos em peças personalizadas com identidade e presença visual.</p><p>Do contraste das cores ao brilho do acabamento, nosso olhar está nos detalhes que dão vida à sua ideia.</p><a className="text-link" href="#servicos">Conheça as possibilidades <ArrowUpRight size={18} /></a><div className="about-signature"><span className="signature-line" /><span>Feito de detalhes.<br /><strong>Feito para representar.</strong></span></div></div></div>
  </section>;
}

const services = [
  { title: "Esmaltação em metal", text: "Pintura em resina que valoriza o desenho e os detalhes de peças metálicas.", image: "chaveiro", icon: Palette, category: "COR & ACABAMENTO" },
  { title: "Peças para eventos", text: "Acabamento em peças comemorativas, medalhas e projetos que celebram momentos.", image: "medalhas", icon: Layers3, category: "MOMENTOS & CONQUISTAS" },
  { title: "Emblemas e identidades", text: "Aplicação de cores para dar presença a símbolos, emblemas e identidades visuais.", image: "bororos", icon: ScanLine, category: "MARCAS & SÍMBOLOS" },
  { title: "Projetos personalizados", text: "Cada ideia começa com uma conversa. Analisamos as necessidades de acabamento do seu projeto.", image: "ipe", icon: Shapes, category: "A SUA IDEIA, EM DETALHES" },
];
export function Services() {
  return <section className="services-section section-space shell" id="servicos" aria-labelledby="services-title"><div className="section-intro" data-reveal><div><Eyebrow number="04">O QUE FAZEMOS</Eyebrow><h2 id="services-title">Acabamentos que<br /><span className="muted">valorizam seu projeto.</span></h2></div><p>Diferentes possibilidades.<br />Um olhar atento para cada peça.</p></div><div className="services-grid">{services.map((service, i) => <a key={service.title} href="#contato" className="service-card" data-tilt data-reveal><div className="service-top"><span className="mono">0{i + 1}</span><service.icon size={22} strokeWidth={1.3} /></div><div className={`service-photo service-photo-${service.image}`}><Image src={`/images/portfolio/${service.image}.webp`} alt="" fill sizes="(max-width: 650px) 80vw, 25vw" /></div><p className="eyebrow service-category">{service.category}</p><h3>{service.title}</h3><p>{service.text}</p><span className="service-arrow"><ArrowUpRight size={20} /></span></a>)}</div><p className="services-note">Nosso foco é a pintura e o acabamento das peças metálicas. Conte sua ideia para avaliarmos as possibilidades.</p></section>;
}

const differences = [
  ["Personalização", "Cada projeto tem uma identidade. O acabamento acompanha as suas características."],
  ["Valorização visual", "Cores e resina dão destaque aos elementos que tornam a sua peça especial."],
  ["Versatilidade", "Possibilidades de aplicação para diferentes peças, eventos e identidades visuais."],
  ["Atenção aos detalhes", "Cuidado com a apresentação e com o acabamento de cada projeto."],
];
export function Differentials() {
  return <section className="differences-section section-space" aria-labelledby="differences-title"><div className="shell"><Eyebrow number="05">O NOSSO OLHAR</Eyebrow><div className="differences-grid"><div data-reveal><h2 id="differences-title">A diferença<br />está nos<br /><em>detalhes.</em></h2><div className="difference-mark" aria-hidden="true"><span /><span /><span /><i>THG</i></div></div><div className="difference-list">{differences.map(([title, text], index) => <div key={title} className="difference" data-reveal><span className="mono difference-number">0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div><Check size={18} strokeWidth={1.4} /></div>)}</div></div><div className="difference-bottom"><span>DA IDEIA AO ACABAMENTO.</span><span>IDENTIDADE EM CADA PEÇA.</span><ArrowUpRight size={20} /></div></div></section>;
}

export function ContactHeading() {
  return <div className="contact-copy" data-reveal><Eyebrow number="06">VAMOS DAR COR À SUA IDEIA?</Eyebrow><h2 id="contact-title">Seu projeto<br />merece um<br /><em>acabamento<br />especial.</em></h2><p>Entre em contato com a THG Esmaltação e conte o que você precisa. Vamos conversar sobre as possibilidades para o seu projeto.</p><div className="contact-bottom-note"><span className="live-dot" /> UMA BOA PEÇA COMEÇA COM UMA CONVERSA.</div></div>;
}

export function FinalCta() {
  return <div className="closing-line shell"><p>Uma ideia sua.<br /><span>Um acabamento THG.</span></p><Button href="#contato" outline>Vamos tirar do papel</Button></div>;
}
