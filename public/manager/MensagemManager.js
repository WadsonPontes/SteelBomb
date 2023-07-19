import { GlobalManager } from "./GlobalManager.js";

export class MensagemManager {
	static enviar(controller, metodo, jogador = null, dados = null) {
		GlobalManager.jogador.ws.send(JSON.stringify({
			controller,
			metodo,
			jogador,
			dados
		}));
	}
}