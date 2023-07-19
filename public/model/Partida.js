import { Estado } from '../enum/Estado.js';
import { MapaPadrao } from './MapaPadrao.js';
import { Personagem } from './Personagem.js';

export class Partida {
	constructor(jogadores) {
		this.id = null;
		this.nome = 'SEM NOME';
        this.mapa = null;
        this.personagens = null;
		this.estado = Estado.INICIAL;
	}
}
