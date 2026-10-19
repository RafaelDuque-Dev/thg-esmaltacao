"use client";
import { useEffect } from "react";
import { gsap } from "gsap";

export default function Effects() {
  useEffect(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        gsap.from(".hero-copy > *", { y: 25, opacity: 0, stagger: 0.1, duration: 1.05, ease: "power3.out", clearProps: "all" });
      });
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          gsap.fromTo(entry.target, { y: 26, opacity: 0.15 }, { y: 0, opacity: 1, duration: 0.85, ease: "power3.out", clearProps: "all" });
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.08 });
      document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));
      return () => { observer.disconnect(); ctx.revert(); };
    });
    const cleanups: (() => void)[] = [];
    media.add("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)", () => {
      document.querySelectorAll<HTMLElement>("[data-tilt], .magnetic").forEach((element) => {
        const magnetic = element.classList.contains("magnetic");
        const eventSurface = element.classList.contains("hero-art") ? element.closest<HTMLElement>(".hero") || element : element;
        const move = (event: MouseEvent) => {
          const r = eventSurface.getBoundingClientRect();
          const x = (event.clientX - r.left) / r.width - 0.5;
          const y = (event.clientY - r.top) / r.height - 0.5;
          element.style.setProperty("--mouse-x", `${(x + 0.5) * 100}%`);
          element.style.setProperty("--mouse-y", `${(y + 0.5) * 100}%`);
          gsap.to(element, { x: magnetic ? x * 8 : x * 3, y: magnetic ? y * 6 : y * 3, rotateY: magnetic ? 0 : x * 3, rotateX: magnetic ? 0 : -y * 3, duration: 0.7, ease: "power2.out", overwrite: "auto" });
        };
        const reset = () => gsap.to(element, { x: 0, y: 0, rotateX: 0, rotateY: 0, duration: 0.8, overwrite: "auto" });
        eventSurface.addEventListener("mousemove", move);
        eventSurface.addEventListener("mouseleave", reset);
        cleanups.push(() => { eventSurface.removeEventListener("mousemove", move); eventSurface.removeEventListener("mouseleave", reset); gsap.set(element, { clearProps: "transform" }); });
      });
      return () => { cleanups.forEach((fn) => fn()); cleanups.length = 0; };
    });
    return () => media.revert();
  }, []);
  return null;
}
