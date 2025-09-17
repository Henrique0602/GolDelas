# GolDelas - MVP (Sem Integração com API-Football)

Este é o MVP do GolDelas, uma interface web moderna construída em Next.js para exibir partidas, estatísticas e widgets oficiais de futebol feminino. Este projeto não inclui a integração com a API-Football, sendo focado exclusivamente no desenvolvimento do layout visual e na experiência do usuário.

## INTEGRANTES
PEDRO GOMES - RM563191
RAUL LAGUNA - RM562684
ERIC YANG - RM563290
HENRIQUE - 563322
PIETTRA - 562538

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
Copiar código
npm install
Inicie o servidor de desenvolvimento:

bash
Copiar código
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
Copiar código
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
Copiar código
git fetch --all
Alternar para a branch de integração:

bash
Copiar código
git checkout api-integration
Executar a Versão com API
Após entrar na branch api-integration:

Instalar dependências (se necessário):

bash
Copiar código
npm install
Iniciar o servidor:

bash
Copiar código
npm run dev
Configurar chave da API:

Obtenha uma chave API no painel da API-Football

Substitua o valor de x-apisports-key em app/Estatisticas/[id]/page.js

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
