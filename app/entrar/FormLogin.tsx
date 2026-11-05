"use client";

import { useRouter } from "next/navigation";
import { type FormEvent, useState }
  from "react";

// Só caminho interno (capítulo 13).
function destino(volta: string | null) {
  return volta?.startsWith("/")
    && !volta.startsWith("//") ? volta : "/";
}

// Ilha interativa: o resto da página é HTML.
export function FormLogin() {
  const router = useRouter();
  const [erro, setErro] = useState("");

  async function enviar(
    e: FormEvent<HTMLFormElement>,
  ) {
    e.preventDefault();
    const dados =
      new FormData(e.currentTarget);
    const r = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json" },
      body: JSON.stringify({
        email: dados.get("email"),
        senha: dados.get("senha") }),
    });
    if (!r.ok) {
      setErro("E-mail ou senha incorretos.");
      return;
    }
    const volta = new URLSearchParams(
      location.search).get("volta");
    router.replace(destino(volta));
  }

  return (
    <form onSubmit={enviar}>
      <label>E-mail
        <input name="email" type="email" />
      </label>
      <label>Senha
        <input name="senha" type="password" />
      </label>
      <button type="submit">Entrar</button>
      {erro && <p role="alert">{erro}</p>}
    </form>
  );
}
