import { TextoComponent } from '../component/TextoComponent.js';
import { GlobalManager } from '../manager/GlobalManager.js';
import { MensagemManager } from '../manager/MensagemManager.js';
import { Partida } from '../model/Partida.js';

export class JogoRapidoController {
	constructor() {
		this.corFundo = '#141B46';
    	this.componentes = [];
	}

	iniciar(jogador, partida, dados) {
		GlobalManager.attJogador(jogador);
		GlobalManager.addPartida(partida);
		GlobalManager.mudarTela(this);
	}

	atualizacao(jogador, partida, dados) {
		GlobalManager.attJogador(jogador);
		GlobalManager.attPartida(partida);
	}

	desenhar() {
		const personagem = GlobalManager.partida.personagens[GlobalManager.jogador.idpersonagem];
		const x = (window.innerWidth / 2) - 25;
		const y = (window.innerHeight / 2) - 32;

		GlobalManager.pintarFundo(this.corFundo);
		GlobalManager.ctx.drawImage(
			GlobalManager.partida.mapa.imagem,
			x - personagem.x,
			y - personagem.y,
			6000,
			4500
		);

		GlobalManager.partida.personagens.forEach((person) => {
			const angulo = person.angulo * Math.PI / 180;

			GlobalManager.ctx.save();

			if (person.id == personagem.id) {
				GlobalManager.ctx.translate(x, y);
				GlobalManager.ctx.rotate(angulo);
				GlobalManager.ctx.translate(-x, -y);

				GlobalManager.ctx.drawImage(
					person.imagem,
					x,
					y,
					50,
					64
				);
			}
			else {
				GlobalManager.ctx.translate(person.x + x - personagem.x, person.y + y - personagem.y);
				GlobalManager.ctx.rotate(angulo);
				GlobalManager.ctx.translate(-person.x - x + personagem.x, -person.y - y + personagem.y);

				GlobalManager.ctx.drawImage(
					person.imagem,
					person.x + x - personagem.x,
					person.y + y - personagem.y,
					50,
					64
				);
			}

			GlobalManager.ctx.restore();
		});
  	}

	redimensionar() {
		
	}

	clicou(event) {
		this.componentes.forEach((value) => {
			if (GlobalManager.contido(event.clientX, event.clientY, value)) {
				this.clicouComponente(event, value);
			}
		});
	}

	clicouComponente(event, componente) {
		if (componente.NOME == '') {
			
		}
	}

	teclou(key) {
		MensagemManager.enviar('jogoRapidoController', 'teclou', GlobalManager.jogador, key);
	}

	desteclou(key) {
		
	}
}