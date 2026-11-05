# Mini-Prontuário · laboratório Next.js

Laboratório de observação dos capítulos 17 e 18 do ebook *Estado & Tela*:
a ficha do paciente renderizada no servidor, com Next.js 16 (App Router,
Cache Components), consumindo a mesma API do livro.

## Rodar

1. A API (`estado-e-tela-api`, tag `cap15`) em :3000, aceitando esta
   origem: `CORS_ORIGINS=http://localhost:5174 npm start`.
2. Aqui: `npm install`, `npm run build`, `npm start` (porta 5174).
3. Abra `/pacientes/p1`; sem sessão, o servidor manda para `/entrar`.

O Next repassa `/api` para a API (`rewrites` em `next.config.ts`): o
cookie de sessão é da mesma origem, como no proxy do Vite.

## Tags

| Tag | O que tem |
|---|---|
| `cap17-antes` | data de nascimento formatada num componente cliente com `toLocaleDateString()`: o HTML do servidor e o navegador discordam (erro de hidratação 418) e o dia sai errado |
| `cap17` | data formatada no servidor, sem `Date`; `lib/api.ts` com `import "server-only"` |
| `cap18` | `proxy.ts` (checagem otimista do cookie), layout aninhado em `/pacientes`, Route Handler `/saude`, página `/sobre` com `"use cache"` |
