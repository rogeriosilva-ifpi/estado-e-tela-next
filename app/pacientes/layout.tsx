import Link from "next/link";
import type { ReactNode } from "react";

// Layout aninhado: envolve toda página sob
// /pacientes e não renderiza de novo quando
// se troca de paciente.
export default function LayoutPacientes(
  { children }: { children: ReactNode },
) {
  return (
    <>
      <nav aria-label="Prontuário">
        <Link href="/pacientes/p1">
          Maria</Link>
        {" · "}
        <Link href="/pacientes/p2">João</Link>
      </nav>
      {children}
    </>
  );
}
