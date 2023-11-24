# JBChat
Este é um projeto que é uma Aplicação ChatBot extremamente simples usando API do Bing com Java, Node.js e Nashorn. Ele foi inspirado em conversas com o próprio bot e desenvolvido por Gabriel, O Nerd (nerdonhub) sob licença MIT.

## Sobre o projeto

Este projeto é uma aplicação web que permite ao usuário conversar com um bot que usa a API do Bing para obter informações, gerar conteúdo criativo e responder a perguntas. O bot é capaz de entender e se comunicar fluentemente em vários idiomas, como português, inglês, espanhol, francês, etc. O bot também pode criar arte gráfica usando um modelo de inteligência artificial, com base em um prompt fornecido pelo usuário.

O projeto usa Java, Node.js e Nashorn para criar uma interface web, um servidor e um script que interage com a API do Bing. O projeto usa Nashorn: um mecanismo JavaScript embutido no Java 8 que permite executar scripts JavaScript no lado do servidor e acessar objetos Java.

## Como usar

Para usar este projeto, você precisa ter instalado o [Node.js](https://nodejs.org/en) e o [Java 8] ou superior em seu computador. Você também precisa de uma chave de acesso para a API do Bing, saiba mais [aqui](https://learn.microsoft.com/pt-br/azure/ai-services/openai/chatgpt-quickstart?tabs=command-line%2Cpython&pivots=programming-language-studio).

Depois de clonar ou baixar este repositório, siga os seguintes passos:

- Abra um terminal e navegue até a pasta do projeto.
- Execute o comando `npm install` para instalar as dependências do Node.js.
- Crie um arquivo chamado `.env` na raiz do projeto e adicione a seguinte linha: `BING_API_KEY=YOUR_API_KEY`, substituindo `YOUR_API_KEY` pela sua chave de acesso da API do Bing.
- Execute o comando `npm start` para iniciar o servidor Node.js na porta 3000.
- Abra outro terminal e navegue até a pasta do projeto.
- Execute o comando `java -cp . ChatBot` para iniciar o script Nashorn que se comunica com o servidor Node.js e a API do Bing.
- Abra o seu navegador e acesse o endereço `http://localhost:3000` para ver a interface web da aplicação.
- Digite uma mensagem na caixa de texto e clique em enviar para conversar com o bot.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](/JBChat/LICENSE) para mais detalhes.