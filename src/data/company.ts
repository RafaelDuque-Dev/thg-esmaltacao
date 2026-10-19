const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

export const company = {
  name: "THG Esmaltação",
  url: configuredUrl || "https://thg-esmaltacao.daintybead11.chatgpt.site",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5511981825721",
  whatsappDisplay: "(11) 98182-5721",
  description: "THG Esmaltação: pintura em resina e acabamento personalizado para peças metálicas, chaveiros, emblemas e projetos para eventos. Conheça nossos trabalhos.",
  message: "Olá! Conheci a THG Esmaltação pelo site e gostaria de solicitar um orçamento para um projeto personalizado.",
};

export function whatsappUrl(message: string = company.message) {
  const number = company.whatsapp.replace(/\D/g, "");
  if (!/^[1-9]\d{9,14}$/.test(number)) return "#contato";
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
