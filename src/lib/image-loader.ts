"use client";
import type { ImageLoaderProps } from "next/image";

export default function imageLoader({ src, width }: ImageLoaderProps) {
  if (!src.endsWith(".webp")) return src;
  const sizes = [480, 768, 1200, 1600];
  const size = sizes.find((value) => value >= width) || 1600;
  return src.replace(/\.webp$/, `-${size}.webp`);
}
