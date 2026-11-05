import "server-only";

// Só roda no servidor do Next. Um componente
// cliente que importar este arquivo quebra o
// build, em vez de levar o código junto.
const API = process.env.API_URL
  ?? "http://localhost:3000";

export interface Paciente {
  id: string;
  nome: string;
  cns: string;
  nascimento: string;
}

export type Resposta =
  | { tipo: "ok"; paciente: Paciente }
  | { tipo: "sem-sessao" }
  | { tipo: "nao-existe" };

// O servidor do Next repassa o cookie da
// pessoa: a API decide, como sempre.
export async function obterPaciente(
  id: string, sessao: string,
): Promise<Resposta> {
  const r = await fetch(`${API}/api/patients/`
    + encodeURIComponent(id), { headers:
    { cookie: `__Host-sessao=${sessao}` } });
  if (r.status === 401)
    return { tipo: "sem-sessao" };
  if (r.status === 404)
    return { tipo: "nao-existe" };
  if (!r.ok)
    throw new Error(`API: ${r.status}`);
  return { tipo: "ok",
    paciente: await r.json() };
}
