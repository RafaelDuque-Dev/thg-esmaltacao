"use client";
import { useState } from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { company, whatsappUrl } from "@/data/company";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [preparedUrl, setPreparedUrl] = useState("");
  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const phone = String(form.get("phone") || "").replace(/\D/g, "");
    const description = String(form.get("description") || "").trim();
    if (name.length < 2 || !/^\d{10,13}$/.test(phone) || description.length < 15) { setStatus("Confira seu nome, WhatsApp com DDD e uma descrição com pelo menos 15 caracteres."); return; }
    const message = `${company.message}\n\nNome: ${name}\nEmpresa: ${String(form.get("company") || "").trim() || "Não informada"}\nWhatsApp: ${String(form.get("phone"))}\nTipo de peça: ${String(form.get("service"))}\nQuantidade aproximada: ${String(form.get("quantity") || "").trim() || "A definir"}\n\nSobre o projeto:\n${description}`;
    setPreparedUrl(whatsappUrl(message));
    setStatus("Sua mensagem está pronta. Continue no WhatsApp para revisar e enviar à THG.");
  }
  return <div className="contact-panel"><a href={whatsappUrl()} className="whatsapp-direct" target="_blank" rel="noopener noreferrer"><span className="whatsapp-symbol"><MessageCircle size={25} strokeWidth={1.5} /></span><span><strong>Prefere conversar agora?</strong><span>Solicitar orçamento pelo WhatsApp</span></span><ArrowUpRight size={22} /></a><div className="form-divider"><span>OU CONTE UM POUCO DO SEU PROJETO</span></div><form onSubmit={submit} onChange={() => { if (preparedUrl) { setPreparedUrl(""); setStatus(""); } }}>
    <div className="form-row"><label>Seu nome <span>*</span><input name="name" autoComplete="name" placeholder="Como podemos te chamar?" minLength={2} maxLength={100} required /></label><label>Empresa<input name="company" autoComplete="organization" placeholder="Se aplicável" maxLength={120} /></label></div>
    <div className="form-row"><label>WhatsApp com DDD <span>*</span><input name="phone" type="tel" autoComplete="tel" inputMode="tel" pattern={String.raw`[0-9\+\(\)\s\-]{10,22}`} maxLength={22} placeholder="(11) 99999-9999" required /></label><label>Tipo de peça <span>*</span><select name="service" defaultValue="" required><option value="" disabled>Selecione uma opção</option><option>Chaveiros</option><option>Emblemas</option><option>Peças para eventos</option><option>Projeto personalizado</option><option>Quero conversar sobre uma ideia</option></select></label></div>
    <label>Quantidade aproximada<input name="quantity" placeholder="Ex.: 100 peças ou quantidade a definir" maxLength={80} /></label><label>Conte sua ideia <span>*</span><textarea name="description" rows={3} placeholder="Qual é o projeto? Quais cores e detalhes você imagina?" minLength={15} maxLength={2000} required /></label>
    <p className="form-privacy">Seus dados serão incluídos apenas na mensagem que você revisar e enviar pelo WhatsApp. Este site não armazena o formulário.</p>
    <button className="button button-primary form-submit" type="submit"><span>Preparar meu orçamento</span><ArrowUpRight size={19} /></button>
    <div className="form-status" role="status">{status}{preparedUrl && <a href={preparedUrl} className="button button-outline prepared-link" target="_blank" rel="noopener noreferrer">Continuar no WhatsApp <ArrowUpRight size={18} /></a>}</div>
  </form></div>;
}
