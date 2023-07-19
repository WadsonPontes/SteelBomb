import { MenuPrincipalController } from '../controller/MenuPrincipalController.js';
import { ProcurandoJogoRapidoController } from '../controller/ProcurandoJogoRapidoController.js';
import { TextoComponent } from '../component/TextoComponent.js';
import { Jogador } from '../model/Jogador.js';
import { Partida } from '../model/Partida.js';
import { Personagem } from '../model/Personagem.js';
import { Tiro } from '../model/Tiro.js';
import { Mapa } from '../model/Mapa.js';
import { MapaPadrao } from '../model/MapaPadrao.js';

export class GlobalManager {
	static canvas = null;
	static ctx = null;
	static jogador = null;
	static tela = null;
	static partida = null;

	static iniciar(ws) {
		GlobalManager.canvas = document.querySelector('canvas');
		GlobalManager.ctx = GlobalManager.canvas.getContext('2d');
		GlobalManager.jogador = new Jogador(ws);
		GlobalManager.tela = new MenuPrincipalController();
	}

	static mudarTela(tela) {
		GlobalManager.tela = tela;
	}

	static addWs(ws) {
		GlobalManager.jogador.ws = ws;
	}

	static attJogador(jogador) {
		const instance = Object.assign(new Jogador(), jogador);
		instance.ws = GlobalManager.jogador.ws;
		GlobalManager.jogador = instance;
	}

	static attPartida(partida) {
		GlobalManager.addPartida(partida);
	}

	static addPartida(partida) {
		const instance = Object.assign(new Partida(), partida);
		instance.mapa = Object.assign(new MapaPadrao(), instance.mapa);
		const imagem = new Image();
		imagem.src = instance.mapa.imagem;
		instance.mapa.imagem = imagem;
		instance.jogadores.forEach((jogador, index) => {
			instance.jogadores[index] = Object.assign(new Jogador(), jogador);
		});
		instance.personagens.forEach((personagem, index) => {
			instance.personagens[index] = Object.assign(new Personagem(), personagem);
			const img = new Image();
			img.src = instance.personagens[index].imagem;
			instance.personagens[index].imagem = img;
		});
		instance.tiros.forEach((tiro, index) => {
			instance.tiros[index] = Object.assign(new Tiro(), tiro);
			const img = new Image();
			img.src = instance.tiros[index].imagem;
			instance.tiros[index].imagem = img;
		});
		GlobalManager.partida = instance;
	}

	static limparTela() {
		GlobalManager.ctx.clearRect(
			0,
			0,
			GlobalManager.canvas.width,
			GlobalManager.canvas.height
		);
	}

	static desenhar() {
		GlobalManager.tela.desenhar();
	}

	static getLargura(largura) {
		return window.innerWidth * largura / 100;
	}

	static getAltura(altura) {
		return window.innerHeight * altura / 100;
	}

	static getX(x, largura) {
		return (window.innerWidth * x / 100) - largura/2;
	}

	static getY(y, altura) {
		return (window.innerHeight * y / 100) - altura/2;
	}

	static getFonte(texto, largura) {
		let fonte = 10;
		GlobalManager.ctx.font = `900 ${fonte}px system-ui`;
		let comprimento = GlobalManager.ctx.measureText(texto).width;

		while (comprimento < largura) {
			++fonte

			GlobalManager.ctx.font = `900 ${fonte}px system-ui`;
			comprimento = GlobalManager.ctx.measureText(texto).width;
		}

		return fonte;
	}

	static pintarFundo(cor) {
		GlobalManager.ctx.fillStyle = cor;
    	GlobalManager.ctx.fillRect(0, 0, GlobalManager.canvas.width, GlobalManager.canvas.height);
	}

	static contido(x, y, componente) {
		return x > componente.getX()
			&& y > componente.getY()
			&& x < componente.getX() + componente.getLargura()
			&& y < componente.getY() + componente.getAltura();
	}
}