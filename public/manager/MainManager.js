import { GlobalManager } from './GlobalManager.js';
import { MensagemManager } from './MensagemManager.js';
import { EventoManager } from './EventoManager.js';

export class MainManager {
	static novaConexao(url) {
		const ws = new WebSocket(url);

		GlobalManager.iniciar();
		EventoManager.iniciar();
		GlobalManager.addWs(ws);

		ws.onmessage = (raw) => MainManager.novaMensagem(raw);
		ws.onclose = (id, descricao) => MainManager.fechadaConexao(id, descricao);
		ws.onerror = (erro) => MainManager.erroConexao(erro);
	}

	static sucessoConexao(jogador) {
		GlobalManager.attJogador(jogador);
		MainManager.iniciarJogo();
	}

	static novaMensagem(raw) {
		const dados = JSON.parse(raw.data);

		if (dados.controller == 'mainManager') {
			MainManager[dados.metodo](dados.jogador, dados.dados);
		}
		else {
			this[dados.controller][dados.metodo](dados.jogador, dados.dados);
		}
	}

	static fechadaConexao(id, descricao) {
		if (id == 1001) {
			console.error(`Conexão fechada: ${id} - ${descricao}`);
		}
		else {
			console.error(`Conexão caiu: ${id} - ${descricao}`);
		}
	}

	static erroConexao(erro) {
		console.error(`Erro na conexão: ${erro.message}`);
	}

	static iniciarJogo() {
		MainManager.runJogo();
	}

	static runJogo() {
		GlobalManager.limparTela();
		GlobalManager.desenhar();
		window.requestAnimationFrame(MainManager.runJogo);
	}
}

MainManager.novaConexao(`ws://${location.host}`);
