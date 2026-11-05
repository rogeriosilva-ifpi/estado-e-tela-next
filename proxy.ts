import { type NextRequest, NextResponse }
  from "next/server";

// Roda antes de renderizar, em toda rota do
// matcher. É uma checagem otimista: só vê
// se o cookie existe. Quem valida a sessão
// continua sendo a API.
export function proxy(req: NextRequest) {
  if (req.cookies.has("__Host-sessao"))
    return;
  const volta = req.nextUrl.pathname;
  const login = new URL("/entrar", req.url);
  login.searchParams.set("volta", volta);
  return NextResponse.redirect(login);
}

export const config =
  { matcher: "/pacientes/:caminho*" };
