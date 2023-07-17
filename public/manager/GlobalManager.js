import { Jogador } from '../model/Jogador.js';

export class GlobalManager {
	constructor() {
		this.jogador = new Jogador();
	}

	static getInstance() {
		if (!GlobalManager.instance) {
			GlobalManager.instance = new GlobalManager();
		}
		return GlobalManager.instance;
	}

	addWs(ws) {
		this.jogador.ws = ws;
	}

	attJogador(jogador) {
		jogador.ws = this.jogador.ws;
		this.jogador = jogador;
	}
}