// O arquivo JavaScript que contém o código da API do Bing Chat
// Este código é uma adaptação do código original disponível em
// Ele usa o módulo request-promise para fazer as requisições HTTP
// Ele usa o módulo ws para criar uma conexão WebSocket
// Ele usa o módulo events para emitir eventos

// Importar os módulos necessários
const rp = require('request-promise');
const WebSocket = require('ws');
const EventEmitter = require('events');

// Definir algumas constantes
const BING_CHAT_URL = 'https://www.bing.com/chat';
const BING_CHAT_WS_URL = 'wss://www.bing.com/chat/ws';
const BING_CHAT_API_URL = 'https://www.bing.com/chat/api';
const BING_CHAT_USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36';

// Exportar a classe BingChat
module.exports = class BingChat extends EventEmitter {

    // O construtor da classe
    constructor() {
        super();
        this.cookie = null; // O cookie do Bing Chat
        this.ws = null; // A conexão WebSocket
        this.sessionId = null; // O ID da sessão do Bing Chat
        this.messageId = 0; // O contador de mensagens enviadas
    }

    // Um método para iniciar a sessão do Bing Chat usando o cookie
    async start(cookie) {
        try {
            // Salvar o cookie
            this.cookie = cookie;

            // Obter o ID da sessão do Bing Chat
            this.sessionId = await this.getSessionId();

            // Criar uma conexão WebSocket com o Bing Chat
            this.ws = new WebSocket(BING_CHAT_WS_URL, {
                headers: {
                    'Cookie': this.cookie,
                    'User-Agent': BING_CHAT_USER_AGENT
                }
            });

            // Definir os listeners para os eventos do WebSocket
            this.ws.on('open', () => {
                // Emitir o evento open
                this.emit('open');
            });

            this.ws.on('message', (data) => {
                // Parsear o dado recebido como JSON
                let message = JSON.parse(data);

                // Verificar se o dado é uma mensagem do Bing Chat
                if (message.type === 'message') {
                    // Emitir o evento message com o conteúdo da mensagem
                    this.emit('message', message.content);
                }
            });

            this.ws.on('error', (error) => {
                // Emitir o evento error com o erro
                this.emit('error', error);
            });

            this.ws.on('close', (code, reason) => {
                // Emitir o evento close com o código e a razão
                this.emit('close', code, reason);
            });

        } catch (error) {
            // Emitir o evento error com o erro
            this.emit('error', error);
        }
    }

    // Um método para enviar uma mensagem para o Bing Chat
    async sendMessage(message) {
        try {
            // Incrementar o contador de mensagens
            this.messageId++;

            // Criar o objeto da mensagem
            let messageObject = {
                type: 'message',
                content: message,
                id: this.messageId
            };

            // Enviar o objeto da mensagem como uma string JSON pelo WebSocket
            this.ws.send(JSON.stringify(messageObject));

            // Obter a resposta do Bing Chat pela API
            let response = await this.getResponse(this.messageId);

            // Emitir o evento message com a resposta do Bing Chat
            this.emit('message', response);

        } catch (error) {
            // Emitir o evento error com o erro
            this.emit('error', error);
        }
    }

    // Um método para fechar a sessão do Bing Chat
    close() {
        // Fechar a conexão WebSocket
        this.ws.close();
    }

    // Um método para obter o ID da sessão do Bing Chat
    async getSessionId() {
        // Fazer uma requisição GET para o Bing Chat
        let response = await rp({
            uri: BING_CHAT_URL,
            headers: {
                'Cookie': this.cookie,
                'User-Agent': BING_CHAT_USER_AGENT
            },
            resolveWithFullResponse: true
        });

        // Extrair o ID da sessão do header Set-Cookie
        let cookie = response.headers['set-cookie'][0];
        let sessionId = cookie.match(/_U=(.+?);/)[1];

        // Retornar o ID da sessão
        return sessionId;
    }

    // Um método para obter a resposta do Bing Chat pela API
    async getResponse(messageId) {
        // Fazer uma requisição POST para a API do Bing Chat
        let response = await rp({
            method: 'POST',
            uri: BING_CHAT_API_URL,
            headers: {
                'Cookie': this.cookie,
                'User-Agent': BING_CHAT_USER_AGENT
            },
            body: {
                sessionId: this.sessionId,
                messageId: messageId
            },
            json: true
        });

        // Retornar a resposta do Bing Chat
        return response;
    }
}
