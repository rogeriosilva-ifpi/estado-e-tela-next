import Link from "next/link";

export default function Inicio() {
  return (
    <main>
      <h1>Laboratório de renderização</h1>
      <p>A ficha de um paciente, montada no
        servidor:</p>
      <Link href="/pacientes/p1">
        Maria Souza</Link>
    </main>
  );
}
