import { MainManager } from './MainManager.js';

export class GlobalManager {
	static jogadores = [];
	static fila_rapida = [];
	static partidas = [];

	static addJogador(jogador) {
		GlobalManager.jogadores[jogador.id] = jogador;
	}

	static delJogador(jogador) {
		delete GlobalManager.jogadores[jogador.id];
	}

	static addFilaRapida(jogador) {
		GlobalManager.fila_rapida.push(jogador);
	}
}
