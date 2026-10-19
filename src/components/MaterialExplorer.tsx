"use client";
import { useState } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";
import { Eyebrow } from "./ui";

export default function MaterialExplorer() {
  const [detail, setDetail] = useState(38);
  return <section className="material-section section-space" aria-labelledby="material-title"><div className="shell material-grid">
    <div className="material-copy" data-reveal><Eyebrow number="03">UM OLHAR MAIS DE PERTO</Eyebrow><h2 id="material-title">Pequenos detalhes.<br /><em>Outra dimensão.</em></h2><p>O encontro entre a cor e o metal muda a forma como uma peça é percebida. Aproxime o olhar e explore o brilho, o relevo e o preenchimento da resina.</p><div className="material-labels"><span><i className="swatch swatch-metal" /> METAL</span><span><i className="swatch swatch-resin" /> RESINA</span><span><i className="swatch swatch-color" /> IDENTIDADE</span></div><p className="material-hint"><MoveHorizontal size={18} /> Deslize para explorar o acabamento.</p></div>
    <div className="material-view" data-tilt>
      <div className="material-image"><Image src="/images/portfolio/medalhas.webp" alt="Detalhe da resina amarela e azul junto ao metal da medalha Escolar de Inverno" fill sizes="(max-width: 800px) 95vw, 50vw" style={{ transform: `scale(${1.12 + detail / 95})`, objectPosition: "80% 46%" }} /></div>
      <div className="view-corners" aria-hidden="true"><span /><span /><span /><span /></div><span className="view-label">ACERVO REAL / DETALHE DA RESINA</span><span className="view-magnification" aria-hidden="true">{(1.12 + detail / 95).toFixed(1)}×</span>
      <label className="material-control"><span>Aproximação</span><input type="range" min="0" max="100" value={detail} onChange={(event) => setDetail(Number(event.target.value))} aria-label="Nível de aproximação do acabamento" /><span>+</span></label>
    </div>
  </div></section>;
}
