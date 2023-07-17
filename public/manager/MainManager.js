import { GlobalManager } from './GlobalManager.js';
import { MensagemManager } from './MensagemManager.js';
import { Jogador } from '../model/Jogador.js';

class MainManager {
	constructor() {
		this.globalManager = GlobalManager.getInstance();
		this.mensagemManager = MensagemManager.getInstance();
	}

	static getInstance() {
		if (!MainManager.instance) {
			MainManager.instance = new MainManager();
		}
		return MainManager.instance;
	}

	novaConexao(url) {
		const ws = new WebSocket(url);
		this.globalManager.addWs(ws);

		ws.onmessage = (raw) => this.novaMensagem(raw);
		ws.onclose = (id, descricao) => this.fechadaConexao(id, descricao);
		ws.onerror = (erro) => this.erroConexao(erro);
	}

	sucessoConexao(jogador) {
		this.globalManager.attJogador(jogador);
	}

	novaMensagem(raw) {
		const dados = JSON.parse(raw.data);

		if (dados.controller == 'mainManager') {
			this[dados.metodo](dados.jogador, dados.dados);
		}
		else {
			this[dados.controller][dados.metodo](dados.jogador, dados.dados);
		}
	}

	fechadaConexao(id, descricao) {
		if (id == 1001) {
			console.error(`Conexão fechada: ${id} - ${descricao}`);
		}
		else {
			console.error(`Conexão caiu: ${id} - ${descricao}`);
		}
	}

	erroConexao(erro) {
		console.error(`Erro na conexão: ${erro.message}`);
	}
}

const mainManager = MainManager.getInstance();
mainManager.novaConexao(`ws://${location.host}`);