# GolDelas - Integração com API-Football

Interface web construída em Next.js para exibir partidas, estatísticas e widgets oficiais usando a [API-Football v3](https://www.api-football.com/documentation-v3). O projeto foi pensado para o plano gratuito da API, aproveitando jogos das temporadas 2021 a 2023 e tratando as limitações desse plano.

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
text
esse tambem. aumenta um pouco ta curto:
GolDelas - MVP (Sem Integração com API-Football)
Este é o MVP do GolDelas, uma interface web construída em Next.js para exibir partidas, estatísticas e widgets oficiais. Este projeto não inclui a integração com a API-Football, sendo focado apenas no layout visual do site.

Tecnologias
Next.js 15 (App Router)
React 19
Tailwind CSS 4
Como rodar o MVP
Pré-requisitos: Node.js 18+ e npm.
No terminal, entre na pasta sprint3/ e instale as dependências:
npm install
Inicie o servidor de desenvolvimento:

bash Copiar código npm run dev Acesse http://localhost:3000 no navegador.

Há também os scripts npm run build, npm run start e npm run lint definidos no package.json dentro de sprint3/.

Estrutura do Projeto bash Copiar código sprint3/ +-- app/ +-- Estatisticas/[id]/page.js # Tela dinâmica de estatísticas com layout visual +-- components/JogosAnteriores.js # Cards com layout de jogos anteriores +-- ... # Demais páginas e componentes +-- public/ # Imagens estéticas usadas no layout +-- package.json # Scripts e dependências (npm) +-- README.md # Este documento Como entrar na branch com a API Entrar na branch com a API: Caso queira adicionar a integração com a API-Football, siga os passos abaixo para entrar na branch correspondente:

Abra o terminal e navegue até o diretório do seu projeto.

Execute o comando para buscar todas as branches:

bash Copiar código git fetch --all Entre na branch com a integração da API:

bash Copiar código git checkout api-integration Rodar a branch com a API: Caso já tenha a integração com a API, siga os mesmos passos do MVP para rodar o projeto:

Instalar as dependências:

bash Copiar código npm install Iniciar o servidor de desenvolvimento:

bash Copiar código npm run dev Acesse a aplicação em http://localhost:3000.

Configurar a chave da API: Caso a chave da API-Football não esteja configurada, siga os passos abaixo:

Gere uma chave no painel da API-Football.

Substitua o valor de "x-apisports-key" em app/Estatisticas/[id]/page.js.

Sugestão de melhoria: Movimente a chave para uma variável de ambiente (.env.local) e leia via process.env.NEXT_PUBLIC_APIFOOTBALL_KEY para evitar expor o valor no código-fonte.

Limitações do MVP O MVP não inclui a integração com a API-Football. Portanto, a exibição dos jogos e estatísticas é puramente visual e não dinâmica.

Não há backend implementado, e as informações dos jogos não são puxadas de nenhuma API externa.

Não há funcionalidades de cache ou atualização automática de dados.

Próximos Passos Adicionar a integração com a API-Football na branch api-integration.

Adicionar funcionalidades como a busca dinâmica por jogos e estatísticas reais.

Configurar o armazenamento em cache dos dados da API para evitar múltiplas chamadas.

Sinta-se à vontade para adaptar e expandir o MVP conforme necessário!

css Copiar código

Com esse README, a branch sem a API está claramente descrita, assim como as instruções para alternar para a branch com a API e as configurações necessárias para rodar a versão com a integração da API-Football.

Perguntar ao ChatGPT
markdown
# GolDelas - MVP (Sem Integração com API-Football)

Este é o MVP do GolDelas, uma interface web moderna construída em Next.js para exibir partidas, estatísticas e widgets oficiais de futebol feminino. Este projeto não inclui a integração com a API-Football, sendo focado exclusivamente no desenvolvimento do layout visual e na experiência do usuário.

## Tecnologias Utilizadas
- **Next.js 15** (App Router) - Framework React para produção
- **React 19** - Biblioteca JavaScript para interfaces
- **Tailwind CSS 4** - Framework CSS utilitário
- **Heroicons** - Biblioteca de ícones
- **Lucide React** - Ícones adicionais

## Como Executar o MVP

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn como gerenciador de pacotes

### Instalação e Execução
1. **Navegue até a pasta do projeto**:
   ```bash
   cd sprint3/
Instale as dependências:

bash
npm install
Inicie o servidor de desenvolvimento:

bash
npm run dev
Acesse a aplicação:
Abra seu navegador e visite http://localhost:3000

Scripts Disponíveis
npm run dev - Inicia o servidor de desenvolvimento

npm run build - Constrói a aplicação para produção

npm run start - Inicia o servidor de produção

npm run lint - Executa análise de código com ESLint

Estrutura do Projeto
text
sprint3/
├── app/
│   ├── Estatisticas/[id]/page.js      # Página dinâmica de estatísticas (layout visual)
│   ├── components/
│   │   ├── JogosAnteriores.js         # Cards com layout de jogos anteriores
│   │   ├── Header.js                  # Cabeçalho da aplicação
│   │   ├── Footer.js                  # Rodapé da aplicação
│   │   └── ...                        # Demais componentes
│   ├── page.js                        # Página inicial
│   └── layout.js                      # Layout principal
├── public/
│   ├── images/                        # Imagens e assets estáticos
│   │   ├── logos/
│   │   └── backgrounds/
│   └── favicon.ico
├── package.json                       # Dependências e scripts
└── README.md                          # Documentação
Funcionalidades Implementadas no MVP
🎨 Interface Visual
Design responsivo e moderno

Paleta de cores temática do futebol feminino

Layout adaptável para mobile e desktop

Navegação intuitiva entre seções

📊 Componentes Estáticos
Cards de jogos anteriores com informações visuais

Tabela de estatísticas comparativas

Placar interativo

Emblemas dos times

Linha do tempo de eventos do jogo

🧭 Navegação
Menu de navegação funcional

Links entre páginas

Breadcrumbs para melhor experiência do usuário

Como Acessar a Branch com Integração API
Entrar na Branch com API
Para utilizar a versão com integração completa da API-Football, execute os seguintes comandos:

Buscar todas as branches disponíveis:

bash
git fetch --all
Alternar para a branch de integração:

bash
git checkout api-integration
Executar a Versão com API
Após entrar na branch api-integration:

Instalar dependências (se necessário):

bash
npm install
Iniciar o servidor:

bash
npm run dev
Configurar chave da API:

Obtenha uma chave API no painel da API-Football

Substitua o valor de "x-apisports-key" em app/Estatisticas/[id]/page.js

Recomendado: Use variáveis de ambiente para maior segurança

Limitações do MVP
🔴 Funcionalidades Não Implementadas
Integração com API-Football

Dados dinâmicos em tempo real

Busca e filtros de jogos

Atualização automática de estatísticas

Sistema de cache de dados

⚠️ Considerações Técnicas
Os dados exibidos são estáticos e predefinidos

Não há persistência de dados

As interações são puramente visuais

Não há validação de dados externos

Personalização e Expansão
O MVP foi desenvolvido para ser facilmente customizável:

Cores: Modifique o tema no arquivo de configuração do Tailwind

Conteúdo: Edite os dados estáticos nos componentes

Layout: Adapte os componentes conforme necessidades específicas

Suporte e Contribuição
Para dúvidas ou sugestões:

Consulte a documentação das tecnologias utilizadas

Verifique issues abertas no repositório

Entre em contato com a equipe de desenvolvimento

Nota: Este MVP serve como base visual para a implementação completa com integração de API. A estrutura está preparada para receber os dados dinâmicos sem necessidade de alterações significativas no layout.

Sinta-se à vontade para adaptar e expandir o projeto conforme suas necessidades específicas!
