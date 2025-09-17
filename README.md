# GolDelas - MVP (Sem Integração com API-Football)

Este é o MVP do GolDelas, uma interface web construída em Next.js para exibir partidas, estatísticas e widgets oficiais. Este projeto não inclui a integração com a API-Football, sendo focado apenas no layout visual do site.

## Tecnologias
- [Next.js 15 (App Router)](https://nextjs.org)
- React 19
- Tailwind CSS 4

## Como rodar o MVP
1. **Pré-requisitos**: Node.js 18+ e npm.
2. No terminal, entre na pasta `sprint3/` e instale as dependências:
   ```bash
   npm install
Inicie o servidor de desenvolvimento:

bash
Copiar código
npm run dev
Acesse http://localhost:3000 no navegador.

Há também os scripts npm run build, npm run start e npm run lint definidos no package.json dentro de sprint3/.

Estrutura do Projeto
bash
Copiar código
sprint3/
+-- app/
    +-- Estatisticas/[id]/page.js   # Tela dinâmica de estatísticas com layout visual
    +-- components/JogosAnteriores.js # Cards com layout de jogos anteriores
    +-- ...                         # Demais páginas e componentes
+-- public/                         # Imagens estéticas usadas no layout
+-- package.json                    # Scripts e dependências (npm)
+-- README.md                       # Este documento
Como entrar na branch com a API
Entrar na branch com a API:
Caso queira adicionar a integração com a API-Football, siga os passos abaixo para entrar na branch correspondente:

Abra o terminal e navegue até o diretório do seu projeto.

Execute o comando para buscar todas as branches:

bash
Copiar código
git fetch --all
Entre na branch com a integração da API:

bash
Copiar código
git checkout api-integration
Rodar a branch com a API:
Caso já tenha a integração com a API, siga os mesmos passos do MVP para rodar o projeto:

Instalar as dependências:

bash
Copiar código
npm install
Iniciar o servidor de desenvolvimento:

bash
Copiar código
npm run dev
Acesse a aplicação em http://localhost:3000.

Configurar a chave da API:
Caso a chave da API-Football não esteja configurada, siga os passos abaixo:

Gere uma chave no painel da API-Football.

Substitua o valor de "x-apisports-key" em app/Estatisticas/[id]/page.js.

Sugestão de melhoria: Movimente a chave para uma variável de ambiente (.env.local) e leia via process.env.NEXT_PUBLIC_APIFOOTBALL_KEY para evitar expor o valor no código-fonte.

Limitações do MVP
O MVP não inclui a integração com a API-Football. Portanto, a exibição dos jogos e estatísticas é puramente visual e não dinâmica.

Não há backend implementado, e as informações dos jogos não são puxadas de nenhuma API externa.

Não há funcionalidades de cache ou atualização automática de dados.

Próximos Passos
Adicionar a integração com a API-Football na branch api-integration.

Adicionar funcionalidades como a busca dinâmica por jogos e estatísticas reais.

Configurar o armazenamento em cache dos dados da API para evitar múltiplas chamadas.

Sinta-se à vontade para adaptar e expandir o MVP conforme necessário!

css
Copiar código

Com esse README, a branch sem a API está claramente descrita, assim como as instruções para alternar para a branch com a API e as configurações necessárias para rodar a versão com a integração da API-Football.







Perguntar ao ChatGPT
