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
				GlobalManager.ctx.translate(x+25, y+32);
				GlobalManager.ctx.rotate(angulo);
				GlobalManager.ctx.drawImage(
					person.imagem,
					-25,
					-32,
					50,
					64
				);
				GlobalManager.ctx.rotate(-angulo);
				GlobalManager.ctx.translate(-x, -y);
			}
			else {
				GlobalManager.ctx.translate(person.x + x - personagem.x+25, person.y + y - personagem.y+32);
				GlobalManager.ctx.rotate(angulo);
				GlobalManager.ctx.drawImage(
					person.imagem,
					-25,
					-32,
					50,
					64
				);
				GlobalManager.ctx.rotate(-angulo);
				GlobalManager.ctx.translate(-x, -y);
			}

			GlobalManager.ctx.restore();
		});

		GlobalManager.partida.tiros.forEach((tiro) => {
			const angulo = tiro.angulo * Math.PI / 180;

			GlobalManager.ctx.save();

			GlobalManager.ctx.translate(tiro.x + x - personagem.x+7.5, tiro.y + y - personagem.y+8.5);
			GlobalManager.ctx.rotate(angulo);
			GlobalManager.ctx.drawImage(
				tiro.imagem,
				-7.5,
				-8.5,
				15,
				17
			);
			GlobalManager.ctx.rotate(-angulo);
			GlobalManager.ctx.translate(-x, -y);

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