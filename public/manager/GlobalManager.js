import { MenuPrincipalController } from '../controller/MenuPrincipalController.js';
import { ProcurandoJogoRapidoController } from '../controller/ProcurandoJogoRapidoController.js';
import { TextoComponent } from '../component/TextoComponent.js';
import { Jogador } from '../model/Jogador.js';

export class GlobalManager {
	static canvas = null;
	static ctx = null;
	static jogador = null;
	static tela = null;

	static iniciar() {
		GlobalManager.canvas = document.querySelector('canvas');
		GlobalManager.ctx = GlobalManager.canvas.getContext('2d');
		GlobalManager.jogador = new Jogador();
		GlobalManager.tela = new MenuPrincipalController();
	}

	static mudarTela(tela) {
		GlobalManager.tela = tela;
	}

	static addWs(ws) {
		GlobalManager.jogador.ws = ws;
	}

	static attJogador(jogador) {
		jogador.ws = GlobalManager.jogador.ws;
		GlobalManager.jogador = jogador;
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