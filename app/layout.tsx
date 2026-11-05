import Link from "next/link";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "Mini-Prontuário · Next" };

// Server Component: vira HTML no servidor e
// não manda JavaScript nenhum por si.
export default function Raiz(
  { children }: { children: ReactNode },
) {
  return (
    <html lang="pt-BR">
      <body>
        <header>
          <Link href="/">
            Mini-Prontuário</Link>
        </header>
        {children}
      </body>
    </html>
  );
}
