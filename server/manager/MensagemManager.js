export class MensagemManager {
	static enviar(controller, metodo, jogador, dados = null) {
		jogador.ws.send(JSON.stringify({
			controller,
			metodo,
			jogador,
			dados
		}));
	}

	static enviarAll(controller, metodo, partida, dados = null) {
		partida.jogadores.forEach(jogador => {
			jogador.ws.send(JSON.stringify({
				controller,
				metodo,
				jogador,
				partida,
				dados
			}));
		});
	}
}
