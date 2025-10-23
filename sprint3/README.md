# GolDelas

Projeto front-end em React migrado para o ecossistema [Vite](https://vitejs.dev/) com suporte a TypeScript, React Router e Tailwind CSS.

## Scripts disponíveis

- `npm run dev` – inicia o servidor de desenvolvimento em `http://localhost:5173`.
- `npm run build` – gera o build de produção em `dist/` (execução prévia de checagem com TypeScript).
- `npm run preview` – serve o build de produção localmente.
- `npm run lint` – executa o ESLint nos arquivos do projeto.

## Estrutura principal

- `src/main.tsx` – ponto de entrada da aplicação e configuração do React Router.
- `src/pages/` – páginas/rotas principais do app (`Login`, `Home`, `Campeonato`, etc.).
- `src/components/` – componentes reutilizáveis (`Header`, `Footer`, `JogosAnteriores`, etc.).
- `src/index.css` – folha de estilos que importa o Tailwind CSS.
- `public/` – ativos estáticos (imagens, logos, etc.).

Os imports podem usar o alias `@/` que aponta para `src/` (configurado em `tsconfig.json` e `vite.config.ts`). Exemplos: `import Header from "@/components/Header";`.

## Tailwind CSS

O Tailwind 4 é carregado via PostCSS. Personalizações podem ser feitas diretamente no CSS usando as novas utilidades e diretivas do Tailwind.

## Variáveis de ambiente

Utilize o prefixo `VITE_` em variáveis definidas nos arquivos `.env`. A leitura deve ser feita via `import.meta.env.VITE_SUA_VARIAVEL`.

## Observações

- Rotas são gerenciadas pelo React Router; ajuste os caminhos no array `createBrowserRouter` quando adicionar novas páginas.
- Recursos anteriormente providos por Next.js (rotas de API, SSR, `next/link`, etc.) foram substituídos por alternativas client-side. Para lógica de backend, considere expor uma API separada.
