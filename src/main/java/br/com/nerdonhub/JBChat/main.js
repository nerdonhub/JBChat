// O arquivo JavaScript que cria uma instância da classe BingChat e define as funções de callback
// Este código é executado pelo mecanismo Nashorn a partir do Java

// Criar uma instância da classe BingChat
var bingChat = new BingChat();

// Definir a função de callback para o evento open
bingChat.on('open', function() {
    // Imprimir uma mensagem no console do Java
    print('Conexão com o Bing Chat estabelecida');
});

// Definir a função de callback para o evento message
bingChat.on('message', function(message) {
    // Imprimir a mensagem no console do Java
    print('Mensagem do Bing Chat: ' + message);
});

// Definir a função de callback para o evento error
bingChat.on('error', function(error) {
    // Imprimir o erro no console do Java
    print('Erro do Bing Chat: ' + error);
});

// Definir a função de callback para o evento close
bingChat.on('close', function(code, reason) {
    // Imprimir o código e a razão no console do Java
    print('Conexão com o Bing Chat encerrada: ’ + code + ’ ’ + reason);});