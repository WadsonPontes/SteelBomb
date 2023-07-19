import { GlobalManager } from '../manager/GlobalManager.js';
import { MensagemManager } from '../manager/MensagemManager.js';
import { Partida } from '../model/Partida.js';
import { Mapa } from '../model/Mapa.js';
import { MapaPadrao } from '../model/MapaPadrao.js';

export class JogoRapidoController {
	constructor() {
	
	}

	iniciar() {
        const jogadores = GlobalManager.fila_rapida;
		const mapa = new MapaPadrao();
        const partida = new Partida(jogadores, mapa);
		GlobalManager.fila_rapida = [];
        GlobalManager.partidas[partida.id] = partida;
        MensagemManager.enviarAll('jogoRapidoController', 'iniciar', jogadores, partida)
	}
}