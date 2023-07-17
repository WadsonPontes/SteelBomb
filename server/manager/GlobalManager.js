const Jogador = require('../model/Jogador');

class GlobalManager {
	constructor() {
		this.jogadores = [];
	}

	static getInstance() {
		if (!GlobalManager.instance) {
			GlobalManager.instance = new GlobalManager();
		}
		return GlobalManager.instance;
	}

	addJogador(jogador) {
		this.jogadores[jogador.ws] = jogador;
	}

	delJogador(jogador) {
		delete this.jogadores[jogador.ws];
	}
}

module.exports = GlobalManager;