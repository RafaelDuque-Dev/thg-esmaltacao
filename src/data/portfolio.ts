export const categories = ["Todos", "Chaveiros", "Emblemas", "Eventos", "Personalizados"] as const;
export type Category = (typeof categories)[number];
export type Project = {
  id: string;
  name: string;
  category: Exclude<Category, "Todos">;
  image: string;
  alt: string;
  description: string;
  width: number;
  height: number;
  position?: string;
};

export const portfolio: Project[] = [
  { id: "eventos-esportivos", name: "Cor para celebrar conquistas.", category: "Eventos", image: "/images/portfolio/medalhas.webp", width: 1600, height: 1166, alt: "Medalhas Proleague Brasil e Escolar de Inverno com pintura em verde, amarelo, preto e azul", description: "Pintura em resina em medalhas esportivas. Cores que destacam o desenho e acompanham a identidade de cada evento." },
  { id: "chaveiro-verde", name: "Uma identidade em cada cor.", category: "Chaveiros", image: "/images/portfolio/chaveiro.webp", width: 1250, height: 1289, alt: "Peça metálica circular do Palmeiras com esmaltação verde e relevos dourados", description: "Aplicação de verde em uma peça circular, valorizando o contraste com os detalhes metálicos.", position: "50% 40%" },
  { id: "vai-vai", name: "Presença em preto e dourado.", category: "Emblemas", image: "/images/portfolio/vai-vai.webp", width: 1600, height: 797, alt: "Duas peças triangulares Vai-Vai com fundo preto e detalhes metálicos em relevo", description: "O preto da resina encontra os relevos metálicos em uma composição de contraste e identidade." },
  { id: "ipe", name: "Detalhes que representam.", category: "Personalizados", image: "/images/portfolio/ipe.webp", width: 1200, height: 1600, alt: "Emblema IPÊ com resina preta, branca, verde e amarela sobre metal dourado", description: "Diferentes cores aplicadas a áreas delimitadas do emblema, preservando a leitura dos detalhes.", position: "50% 65%" },
  { id: "bororos", name: "Símbolos com significado.", category: "Eventos", image: "/images/portfolio/bororos.webp", width: 1265, height: 1349, alt: "Peça comemorativa do Núcleo Bandeirante Bororós com flor-de-lis em dois tons de azul", description: "Azuis sobre metal para destacar os elementos de uma peça comemorativa." },
  { id: "ala8", name: "Muitas cores. Uma identidade.", category: "Emblemas", image: "/images/portfolio/ala8.webp", width: 960, height: 1600, alt: "Emblema ALA 8 com desenho em azul, verde, branco e laranja", description: "Pintura em cores para um emblema com diferentes elementos visuais.", position: "50% 50%" },
  { id: "fnx", name: "Contrastes que se destacam.", category: "Personalizados", image: "/images/portfolio/fnx.webp", width: 1288, height: 1413, alt: "Peça circular FNX com acabamento em preto, branco e amarelo", description: "Preto, branco e amarelo dão presença ao desenho da peça circular." },
  { id: "dust", name: "Personalidade nos detalhes.", category: "Personalizados", image: "/images/portfolio/dust.webp", width: 394, height: 573, alt: "Peça circular Dust II com pintura colorida sobre metal", description: "Peça personalizada com áreas coloridas e detalhes metálicos. Fotografia do acervo original." },
];
