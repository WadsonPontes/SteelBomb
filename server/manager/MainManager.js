const GlobalManager = require('./GlobalManager');
const MensagemManager = require('./MensagemManager');
const Jogador = require('../model/Jogador');

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

	novaConexao(ws, req) {
		const jogador = new Jogador(ws);

		ws.on('message', raw => this.novaMensagem(jogador, raw));
		ws.on('error', erro => this.erroConexao(jogador, erro));
		ws.on('close', (id, descricao) => this.fechadaConexao(jogador, id, descricao));

		this.globalManager.addJogador(jogador);
		this.mensagemManager.enviar('mainController', 'novaConexao', jogador);
	}

	novaMensagem(jogador, raw) {
		const dados = JSON.parse(raw);

		if (this.validarDados(dados)) {
			this[dados.controller][dados.metodo](jogador, dados.dados);
		}
		else {
			this.mensagemManager.enviar('mainController', 'erroDados', jogador, dados);
		}
	}

	erroConexao(jogador, erro) {
		this.globalManager.delJogador(jogador);
		console.error(`[${jogador.nome}] Erro na conexão: ${erro.message}`);
	}

	fechadaConexao(jogador, id, descricao) {
		this.globalManager.delJogador(jogador);

		if (id == 1001) {
			console.error(`[${jogador.nome}] Conexão fechada: ${id} - ${descricao}`);
		}
		else {
			console.error(`[${jogador.nome}] Conexão caiu: ${id} - ${descricao}`);
		}
	}

	validarDados(dados) {
		return true;
	}
}

module.exports = MainManager;