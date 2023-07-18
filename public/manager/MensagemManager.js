export class MensagemManager {
	static enviar(controller, metodo, jogador, dados) {
		jogador.ws.send(JSON.stringify({
			controller,
			metodo,
			jogador,
			dados
		}));
	}
}