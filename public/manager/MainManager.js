import { GlobalManager } from './GlobalManager.js';
import { MensagemManager } from './MensagemManager.js';
import { EventoManager } from './EventoManager.js';
import { MenuPrincipalController } from '../controller/MenuPrincipalController.js';
import { ProcurandoJogoRapidoController } from '../controller/ProcurandoJogoRapidoController.js';
import { JogoRapidoController } from '../controller/JogoRapidoController.js';


export class MainManager {
	static menuPrincipalController = new MenuPrincipalController();
	static procurandoJogoRapidoController = new ProcurandoJogoRapidoController();
	static jogoRapidoController = new JogoRapidoController();

	static novaConexao(url) {
		const ws = new WebSocket(url);

		GlobalManager.iniciar(ws);
		EventoManager.iniciar();
		
		ws.onmessage = (raw) => MainManager.novaMensagem(raw);
		ws.onclose = (id, descricao) => MainManager.fechadaConexao(id, descricao);
		ws.onerror = (erro) => MainManager.erroConexao(erro);
	}

	static sucessoConexao(jogador, partida, dados) {
		GlobalManager.attJogador(jogador);
		MainManager.iniciarJogo();
	}

	static novaMensagem(raw) {
		const dados = JSON.parse(raw.data);

		if (dados.controller == 'mainManager') {
			MainManager[dados.metodo](dados.jogador, dados.partida, dados.dados);
		}
		else {
			MainManager[dados.controller][dados.metodo](dados.jogador, dados.partida, dados.dados);
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
console.log('versao 1');
MainManager.novaConexao(`wss://${location.host}`);
