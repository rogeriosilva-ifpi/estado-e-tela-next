import { cacheLife } from "next/cache";

// Nada aqui depende do pedido: com
// "use cache" e um prazo, vira HTML no build e é servido
// pronto.
export default async function Sobre() {
  "use cache";
  cacheLife("days");
  return (
    <main>
      <h1>Sobre o laboratório</h1>
      <p>Ficha renderizada no servidor, para
        comparar com a SPA do livro.</p>
    </main>
  );
}
