"use client";

// Data no formato de quem está vendo.
export function Nascimento({ iso }:
  { iso: string }) {
  return (
    <>{new Date(iso).toLocaleDateString()}</>
  );
}
