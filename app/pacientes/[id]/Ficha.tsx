import { cookies } from "next/headers";
import { notFound, redirect }
  from "next/navigation";
import { obterPaciente } from "@/lib/api";
import { dataBr } from "@/lib/datas";
import { CopiarCns } from "./CopiarCns";

// Server Component assíncrono: busca na API
// e devolve HTML. Nem o código dele nem a
// resposta da API viram JavaScript no
// navegador.
export async function Ficha({ params }:
  { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const sessao = (await cookies())
    .get("__Host-sessao")?.value;
  const volta =
    `/entrar?volta=/pacientes/${id}`;
  if (!sessao) redirect(volta);

  const r = await obterPaciente(id, sessao);
  if (r.tipo === "sem-sessao")
    redirect(volta);
  if (r.tipo === "nao-existe") notFound();
  const p = r.paciente;
  return (
    <article aria-label="Ficha">
      <h2>{p.nome}</h2>
      <dl>
        <dt>CNS</dt><dd>{p.cns}</dd>
        <dt>Nascimento</dt>
        <dd>{dataBr(p.nascimento)}</dd>
      </dl>
      <CopiarCns cns={p.cns} />
    </article>
  );
}
