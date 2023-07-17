const Tela = require('../enum/TelaEnum.js');
const Estado = require('../enum/EstadoEnum.js');

class Jogador {
	constructor(ws) {
		this.ws = ws;
		this.nome = 'SEM NOME';
		this.tela = Tela.INICIAL;
		this.estado = Estado.INICIAL;
	}

	toJSON() {
		const retorno = Object.assign({}, this);
		delete retorno.ws;
		return retorno;
	}
}

module.exports = Jogador;