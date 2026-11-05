import { Suspense } from "react";
import { Ficha } from "./Ficha";

// A casca sai na hora; a ficha chega pelo
// mesmo HTML, em streaming, quando a API
// responder.
export default function Pagina(
  { params }: PageProps<"/pacientes/[id]">,
) {
  return (
    <main>
      <h1>Prontuário</h1>
      <Suspense fallback={
        <p>Carregando a ficha…</p>}>
        <Ficha params={params} />
      </Suspense>
    </main>
  );
}
