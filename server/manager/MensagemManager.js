const Jogador = require('../model/Jogador');

class MensagemManager {
	constructor() {

	}

	static getInstance() {
		if (!MensagemManager.instance) {
			MensagemManager.instance = new MensagemManager();
		}
		return MensagemManager.instance;
	}

	enviar(controller, metodo, jogador, dados) {
		jogador.ws.send(JSON.stringify({
			controller,
			metodo,
			jogador,
			dados
		}));
	}
}

module.exports = MensagemManager;