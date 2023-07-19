import { Estado } from '../enum/Estado.js';
import { MapaPadrao } from './MapaPadrao.js';
import { Personagem } from './Personagem.js';
import { v4 as uuidv4 } from 'uuid';

export class Partida {
	constructor(jogadores, mapa) {
		this.id = uuidv4();
		this.nome = 'SEM NOME';
        this.mapa = mapa;
        mapa.idpartida = this.id;
        this.personagens = this.gerarPersonagens(jogadores);
		this.estado = Estado.INICIAL;
	}

    gerarPersonagens(jogadores) {
        const personagens = [];

        jogadores.forEach((jogador, index) => {
            const personagem = new Personagem(index, jogador.id, this.id, this.mapa);

            jogador.idpartida = this.id;
            jogador.idpersonagem = index;

            personagens.push(personagem);
        });

        return personagens;
    }
}
