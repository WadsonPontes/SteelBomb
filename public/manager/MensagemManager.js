export class MensagemManager {
	static enviar(controller, metodo, jogador = null, dados = null) {
		jogador.ws.send(JSON.stringify({
			controller,
			metodo,
			jogador,
			dados
		}));
	}
}