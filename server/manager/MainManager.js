import { GlobalManager } from './GlobalManager.js';
import { MensagemManager } from './MensagemManager.js';
import { Jogador } from '../model/Jogador.js';
import { MenuPrincipalController } from '../controller/MenuPrincipalController.js';
import { JogoRapidoController } from '../controller/JogoRapidoController.js';

export class MainManager {
	static menuPrincipalController = new MenuPrincipalController();
	static jogoRapidoController = new JogoRapidoController();

	static novaConexao(ws, req) {
		const jogador = new Jogador(ws);

		ws.on('message', raw => MainManager.novaMensagem(jogador, raw));
		ws.on('close', (id, descricao) => MainManager.fechadaConexao(jogador, id, descricao));
		ws.on('error', erro => MainManager.erroConexao(jogador, erro));

		GlobalManager.addJogador(jogador);
		MensagemManager.enviar('mainManager', 'sucessoConexao', jogador);
		console.log(`Nova conexão: ${jogador.nome}`);
	}

	static novaMensagem(jogador, raw) {
		const dados = JSON.parse(raw);

		if (MainManager.validarDados(dados)) {
			MainManager[dados.controller][dados.metodo](jogador, dados);
		}
		else {
			MensagemManager.enviar('mainManager', 'erroDados', jogador, dados);
		}
	}

	static fechadaConexao(jogador, id, descricao) {
		GlobalManager.delJogador(jogador);

		if (id == 1001) {
			console.error(`[${jogador.nome}] Conexão fechada: ${id} - ${descricao}`);
		}
		else {
			console.error(`[${jogador.nome}] Conexão caiu: ${id} - ${descricao}`);
		}
	}

	static erroConexao(jogador, erro) {
		GlobalManager.delJogador(jogador);
		console.error(`[${jogador.nome}] Erro na conexão: ${erro.message}`);
	}

	static validarDados(dados) {
		return true;
	}
}
