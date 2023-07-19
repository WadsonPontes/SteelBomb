import { MainManager } from '../manager/MainManager.js';
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
        MensagemManager.enviarAll('jogoRapidoController', 'iniciar', partida);
		this.runJogo(partida);
	}

	runJogo(partida) {
		MensagemManager.enviarAll('jogoRapidoController', 'atualizacao', partida);

		partida.tiros.forEach((tiro, index) => {
			tiro.atualizar(index);
		});

		setTimeout(() => {
			MainManager.jogoRapidoController.runJogo(partida);
		}, 17);
	}

	teclou(jogador, dados) {
		const personagem = GlobalManager.partidas[jogador.idpartida].personagens[jogador.idpersonagem];
		const key = dados.dados;
		
		if (key == 'w' || key == 'ArrowUp') {
			personagem.y -= 10;
			personagem.angulo = 0;
		}
		if (key == 'd' || key == 'ArrowRight') {
			personagem.x += 10;
			personagem.angulo = 90;
		}
		if (key == 's' || key == 'ArrowDown') {
			personagem.y += 10;
			personagem.angulo = 180;
		}
		if (key == 'a' || key == 'ArrowLeft') {
			personagem.x -= 10;
			personagem.angulo = -90;
		}
		if (key == ' ' || key == 'Enter') {
			personagem.atirar();
		}

		MensagemManager.enviarAll('jogoRapidoController', 'atualizacao', GlobalManager.partidas[jogador.idpartida]);
	}
}