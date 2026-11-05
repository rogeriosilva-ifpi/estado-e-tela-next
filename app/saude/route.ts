import { connection } from "next/server";

const API = process.env.API_URL
  ?? "http://localhost:3000";

// Route Handler: um endpoint HTTP do próprio
// Next. connection() pede que rode a cada
// pedido, não no build.
export async function GET() {
  await connection();
  const r = await fetch(`${API}/health`)
    .catch(() => null);
  return Response.json({ next: "ok",
    api: r?.ok ? "ok" : "fora do ar" });
}
