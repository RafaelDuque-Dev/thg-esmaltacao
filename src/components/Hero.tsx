import Image from "next/image";
import { ArrowDown, Plus } from "lucide-react";
import { Button } from "./ui";

export default function Hero() {
  return <section className="hero" id="inicio" aria-labelledby="hero-title">
    <div className="hero-art" data-tilt>
      <Image src="/images/hero.webp" alt="Conceito ilustrativo de medalhões em metal dourado e resina preta e âmbar sob iluminação de estúdio" fill sizes="(max-width: 700px) 100vw, 75vw" priority className="hero-image" />
      <span className="art-cross cross-one"><Plus size={20} strokeWidth={1} /></span>
      <div className="art-note"><span className="tiny-rule" />METAL EM SUA<br /><span>MELHOR EXPRESSÃO.</span></div>
    </div>
    <div className="shell hero-content">
      <div className="hero-copy">
        <p className="eyebrow hero-eyebrow"><span className="live-dot" /> PINTURA EM RESINA · ACABAMENTO EM METAL</p>
        <h1 id="hero-title">Detalhes que<br />transformam<br />metal em<br /><em>identidade.</em></h1>
        <p className="hero-description">Personalização e acabamento em resina para peças metálicas que representam marcas, celebram momentos e valorizam cada projeto.</p>
        <div className="hero-actions"><Button href="#portfolio">Conheça nossos trabalhos</Button><a className="text-link" href="#contato">Solicitar orçamento <span>↗</span></a></div>
      </div>
      <div className="hero-bottom"><a className="scroll-cue" href="#sobre"><span className="scroll-circle"><ArrowDown size={16} /></span> EXPLORE OS DETALHES</a><p className="concept-note">Estudo visual de materiais · imagem ilustrativa</p><span className="hero-index">01 — 07</span></div>
    </div>
  </section>;
}
