# GolDelas - Integração com API-Football

Interface web construída em Next.js para exibir partidas, estatísticas e widgets oficiais usando a [API-Football v3](https://www.api-football.com/documentation-v3). O projeto foi pensado para o plano gratuito da API, aproveitando jogos das temporadas 2021 a 2023 e tratando as limitações desse plano.

## INTEGRANTES
PEDRO GOMES - RM563191
RAUL LAGUNA - RM562684
ERIC YANG - RM563290
HENRIQUE - 563322
PIETTRA - 562538

## Tecnologias
- [Next.js 15 (App Router)](https://nextjs.org)
- React 19
- Tailwind CSS 4
- Axios para chamadas HTTP
- API-Football widgets (script `https://widgets.api-sports.io/2.0.3/widgets.js`)

## Como rodar o projeto

1. **Pré-requisitos**: Node.js 18+ e npm.
2. No terminal, entre na pasta `sprint3/` e instale as dependências:
   ```bash
   npm install
Inicie o servidor de desenvolvimento:

bash
npm run dev
Acesse http://localhost:3000 no navegador.

Há também os scripts npm run build, npm run start e npm run lint definidos no package.json dentro de sprint3/.

Onde a API é usada
Toda a lógica de integração está em app/Estatisticas/[id]/page.js:

FIXTURE_PRESETS mapeia os links /Estatisticas/1 a /Estatisticas/4 para IDs reais de jogos (fixtureId) que estão disponíveis no plano gratuito. Esses mesmos IDs são usados pelos cards em app/components/JogosAnteriores.js.

api é um cliente Axios pré-configurado com baseURL da API-Football e os headers necessários (x-apisports-key, x-rapidapi-host, Accept).

Ao carregar a página, buscamos primeiro GET /fixtures?id={id}. Se o jogo existir, buscamos GET /fixtures/statistics?fixture={id}. As respostas são guardadas em estado React.

Mensagens de erro retornadas pela API (por exemplo limites do plano gratuito) são exibidas diretamente na interface para facilitar o diagnóstico.

A seção visual mostra o placar, emblemas dos times, lista de gols e estatísticas comparativas (cada linha usa o mesmo índice entre os dois arrays retornados pela API).

Um widget oficial (wg-api-football-game) é montado dinamicamente dentro de um ref. O script do widget é reinjetado sempre que o fixture muda para garantir a atualização.

Configurando a chave da API
A chave fornecida está codificada em API_HEADERS. Para usar outra chave:

Gere uma nova chave no painel da API-Football.

Substitua o valor de "x-apisports-key" em app/Estatisticas/[id]/page.js.

Sugestão de melhoria: mover a chave para uma variável de ambiente (.env.local) e ler via process.env.NEXT_PUBLIC_APIFOOTBALL_KEY para evitar expor o valor no código-fonte.

Adicionando novos jogos
Use o endpoint GET /fixtures?id={id} (ou combine league, season e team) para localizar partidas disponíveis no plano gratuito.

Acrescente o novo par { rota: { fixtureId, description } } em FIXTURE_PRESETS.

Atualize os cards em app/components/JogosAnteriores.js para refletir o jogo: nomes, escudos (https://media.api-sports.io/football/teams/{teamId}.png), placar e link (/Estatisticas/{rota}).

O componente de estatísticas e o widget já funcionam automaticamente para qualquer ID válido.

Limitações conhecidas
O plano gratuito da API-Football restringe temporadas mais novas (use 2021–2023) e bloqueia filtros como last=. A aplicação exibe a mensagem retornada pela API quando isso acontece.

Não há backend; a chave fica exposta no bundle se não for movida para variáveis de ambiente públicas.

Os dados não são armazenados em cache. Cada visita realiza chamadas diretas à API.

Estrutura relevante
text
sprint3/
├── app/
│   ├── Estatisticas/[id]/page.js   # Tela dinâmica com integração API-Football
│   ├── components/JogosAnteriores.js # Cards que apontam para os fixtures disponíveis
│   └── ...                         # Demais páginas e componentes
├── public/                         # Imagens estéticas usadas no layout
├── package.json                    # Scripts e dependências (npm)
└── README.md                       # Este documento
