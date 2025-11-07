# GolDelas

Aplicacao single-page construida com React 19, Vite e Tailwind CSS 4 para destacar o ecossistema do futebol feminino. O MVP migrou o layout do antigo Next.js e agora combina dashboards em tempo real via API-Football com o painel administrativo (CRUD de jogadoras) totalmente client-side.

## Integrantes
- Pedro Gomes - RM563191
- Raul Laguna - RM562684
- Eric Yang - RM563290
- Henrique - RM563322
- Piettra - RM562538

## Stack principal
- Vite + React 19 + TypeScript
- React Router DOM para navegacao entre paginas
- Tailwind CSS 4 via @tailwindcss/postcss
- React Icons para icones

## Deploy
- Plataforma: Vercel
- URL: https://godelas.vercel.app
- Pipeline: `npm run build` executado automaticamente a cada push na branch `main`

## Como executar
Requisitos: Node.js 18+ e npm.

```bash
cd sprint3
npm install
npm run dev
```

```bash
npm run build
npm run preview
```

## Scripts disponiveis
- `npm run dev` - inicia o servidor de desenvolvimento do Vite
- `npm run build` - executa `tsc --noEmit` e gera a build de producao
- `npm run preview` - serve a build gerada para teste local
- `npm run lint` - roda ESLint usando a configuracao em `eslint.config.mjs`

## Estrutura atual
```
sprint3/
|- public/            # assets estaticos
|- src/
   |- components/     # componentes compartilhados (Header, Footer, etc.)
   |- pages/          # paginas migradas do Next.js
   |- index.css       # entrada do Tailwind 4
   |- main.tsx        # bootstrap da SPA e definicao de rotas
|- index.html         # ponto de entrada HTML do Vite
|- package.json       # scripts e dependencias
|- postcss.config.mjs # Tailwind 4 via @tailwindcss/postcss
|- tsconfig.json      # baseUrl e alias @/ apontando para src
|- vite.config.ts     # configuracao do Vite com plugin React e tsconfig paths
```

## Notas sobre a migracao
- As rotas baseadas em arquivos foram reescritas usando `createBrowserRouter` no `main.tsx`.
- Substituimos `next/link` por `Link` do React Router e removemos `next/image`.
- `getServerSideProps` e semelhantes foram descartados; qualquer dado dinamico deve ser buscado no cliente ou via backend proprio.
- Variaveis de ambiente publicas agora devem comecar com `VITE_` e podem ser acessadas via `import.meta.env`.

## Integracao com a API-Football
Os componentes de jogos (proximos jogos, jogos anteriores e a pagina de estatisticas) consomem dados em tempo real via API-Football. Crie um arquivo `.env` na pasta `sprint3` com os valores abaixo (exemplo):

```
VITE_API_FOOTBALL_KEY=coloque_sua_chave_aqui
VITE_API_FOOTBALL_LEAGUE_ID=71
VITE_API_FOOTBALL_SEASON=2023
VITE_API_FOOTBALL_TIMEZONE=America/Sao_Paulo
VITE_API_FOOTBALL_NEXT_FIXTURES_LIMIT=4
VITE_API_FOOTBALL_LAST_FIXTURES_LIMIT=4
```

Outras variaveis opcionais:

- `VITE_API_FOOTBALL_BASE_URL` (padrao `https://v3.football.api-sports.io`)
- `VITE_API_FOOTBALL_HOST` (necessaria apenas se usar RapidAPI)
- `VITE_API_FOOTBALL_FALLBACK_LEAGUE_ID` (liga utilizada quando os filtros principais nao retornam dados, padrao `39`)
- `VITE_API_FOOTBALL_FALLBACK_SEASON` (temporada fallback compativel com plano free, padrao `2023`)
- `VITE_API_FOOTBALL_FREE_MIN_SEASON` e `VITE_API_FOOTBALL_FREE_MAX_SEASON` (delimitam o intervalo de temporadas aceitas no plano gratuito; padroes `2021` e `2023`)
- `VITE_API_FOOTBALL_DEFAULT_FROM` / `VITE_API_FOOTBALL_DEFAULT_TO` (intervalo preferido para chamadas com o campeonato configurado)
- `VITE_API_FOOTBALL_FALLBACK_FROM` / `VITE_API_FOOTBALL_FALLBACK_TO` (intervalo free usado como ultima alternativa, padrao `2023-05-06` a `2023-05-08`)


## Funcionalidades principais
- `src/components/ProximosJogos.tsx`: lista os proximos jogos do campeonato definido via env (com fallback automatico para temporadas 2021-2023).
- `src/components/JogosAnteriores.tsx`: traz os ultimos resultados finalizados (tambem com fallback automatico para temporadas 2021-2023).
- `src/pages/Estatisticas.tsx`: exibe placar, eventos de gol e estatisticas detalhadas do fixture selecionado.
- `src/pages/Jogadora.tsx`: formulario com validacao, listagem, edicao e remocao de jogadoras usando armazenamento local com ordenacao cronologica.
