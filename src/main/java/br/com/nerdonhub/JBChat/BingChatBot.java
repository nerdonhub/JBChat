package br.com.nerdonhub.JBChat;

// A classe Java que usa o Nashorn para executar o código JavaScript da API do Bing Chat
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;
import javax.script.Invocable;

public class BingChatBot {

    // O mecanismo Nashorn
    private ScriptEngine engine;

    // O objeto BingChat criado pelo JavaScript
    private Object bingChat;

    // O construtor da classe
    public BingChatBot(String cookie) {
        try {
            // Criar uma instância do mecanismo Nashorn
            engine = new ScriptEngineManager().getEngineByName("nashorn");

            // Carregar o módulo da API do Bing Chat
            engine.eval("var BingChat = require('./bing-chat-api.js');");

            // Executar o arquivo main.js que cria uma instância da classe BingChat e define as funções de callback
            engine.eval(new java.io.FileReader("main.js"));

            // Obter o objeto BingChat criado pelo JavaScript
            bingChat = engine.get("bingChat");

            // Iniciar a sessão do Bing Chat usando o cookie
            invoke("start", cookie);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // Um método para invocar os métodos do objeto BingChat usando o Invocable
    public Object invoke(String method, Object... args) throws ScriptException, NoSuchMethodException {
        Invocable invocable = (Invocable) engine;
        return invocable.invokeMethod(bingChat, method, args);
    }

    // Um método para enviar uma mensagem para o Bing Chat
    public void sendMessage(String message) throws ScriptException, NoSuchMethodException {
        invoke("sendMessage", message);
    }

    // Um método para fechar a sessão do Bing Chat
    public void close() throws ScriptException, NoSuchMethodException {
        invoke("close");
    }
}
