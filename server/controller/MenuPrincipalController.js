import { GlobalManager } from '../manager/GlobalManager.js';
import { MensagemManager } from '../manager/MensagemManager.js';
import { MainManager } from '../manager/MainManager.js';

export class MenuPrincipalController {
	constructor() {
	
	}

	procurarJogoRapido(jogador, dados) {
		GlobalManager.addFilaRapida(jogador);

		if (GlobalManager.fila_rapida.length > 1) {
			MainManager.jogoRapidoController.iniciar();
		}
		else {
			MensagemManager.enviar('menuPrincipalController', 'procurarJogoRapido', jogador);
		}
	}
}