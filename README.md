# JBChat
This is an extremely simple ChatBot application using the Bing API with Java, Node.js, and Nashorn. It was inspired by conversations with the bot itself and developed by me (Gabriel), under MIT license.

## About this...

The project is a web application that allows users to use the Bing API to search for information, create creative content, and chat with bots that answer questions. The bot can understand and communicate fluently in multiple languages, including Portuguese, English, Spanish, and French. The bot can also create graphic art using artificial intelligence models based on instructions provided by the user. This is a project, a very simple ChatBot application that uses the Bing API with Java, Node.js, and Nashorn. Inspired by conversations with the bot itself. This project uses Java, Node.js, and Nashorn to create a web interface, server, and scripts that interact with the Bing API. This project uses Nashorn, Java 8's built-in JavaScript engine, which allows you to run server-side JavaScript scripts and access Java objects.

## Okay, okay! But... How to use?

To use this project, you need to have installed the [Node.js](https://nodejs.org/en) and the [Java 8] or higher on your computer. You also need an access key for the Bing API, learn more [here](https://learn.microsoft.com/pt-br/azure/ai-services/openai/chatgpt-quickstart?tabs=command-line%2Cpython&pivots=programming-language-studio).

Once you've cloned or downloaded this repository, follow these steps:

- Open a terminal and navigate to the project folder.
- Run the `npm install` command to install the Node.js dependencies.
- Create a file named `.env` at the root of the project and add the following line: `BING_API_KEY=YOUR_API_KEY`, replacing `YOUR_API_KEY` with your Bing API access key.
- Run the `npm start` command to start the Node.js server on port 3000.
- Open another terminal and navigate to the project folder.
- Run the command `java -cp . ChatBot` to start the Nashorn script that communicates with the Node.js server and the Bing API.
- Open your browser and go to the `http://localhost:3000` to view the app's web interface.
- Type a message in the text box and click send to chat with the bot.

## License

This open source project is licensed under the MIT license. See the [LICENSE](/JBChat/LICENSE) file for more details.

Working properly in October/November 2023
