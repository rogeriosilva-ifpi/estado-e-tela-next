import type { NextConfig } from "next";

const API = process.env.API_URL
  ?? "http://localhost:3000";

const config: NextConfig = {
  // o modelo atual do Next 16 (capítulo 18)
  cacheComponents: true,
  partialPrefetching: true,
  // o navegador fala com uma origem só: o
  // Next repassa /api para a API, como o
  // proxy do Vite no capítulo 2
  async rewrites() {
    return [{ source: "/api/:caminho*",
      destination: `${API}/api/:caminho*` }];
  },
};

export default config;
