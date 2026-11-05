"use client";

import { useState } from "react";

// A única parte da ficha que precisa de
// JavaScript no navegador.
export function CopiarCns({ cns }:
  { cns: string }) {
  const [copiado, setCopiado] =
    useState(false);
  return (
    <button type="button"
      onClick={async () => {
        await navigator.clipboard
          .writeText(cns);
        setCopiado(true);
      }}>
      {copiado ? "Copiado" : "Copiar CNS"}
    </button>
  );
}
