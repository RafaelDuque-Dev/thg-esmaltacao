import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { About, ContactHeading, Differentials, FinalCta, Services } from "@/components/Sections";
import Portfolio from "@/components/Portfolio";
import MaterialExplorer from "@/components/MaterialExplorer";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Effects from "@/components/Effects";
import { company } from "@/data/company";

export default function Home() {
  const schema = { "@context": "https://schema.org", "@type": "Organization", name: company.name, url: company.url, description: "Pintura em resina e acabamento personalizado em peças metálicas.", telephone: `+${company.whatsapp}`, contactPoint: { "@type": "ContactPoint", telephone: `+${company.whatsapp}`, contactType: "sales", availableLanguage: "Portuguese" } };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} /><Header /><main id="conteudo"><Hero /><div className="material-strip" aria-hidden="true"><span>PINTURA EM RESINA</span><i>✳</i><span>METAL COM IDENTIDADE</span><i>✳</i><span>CORES QUE REPRESENTAM</span><i>✳</i><span>DETALHES QUE IMPORTAM</span></div><About /><Portfolio /><MaterialExplorer /><Services /><Differentials /><section className="contact-section section-space shell" id="contato" aria-labelledby="contact-title"><ContactHeading /><Contact /></section><FinalCta /></main><Footer /><Effects /></>;
}
