import { GlobalManager } from '../manager/GlobalManager.js';

export class TextoComponent {
	constructor(nome = 'texto_sem_nome', texto = 'JOGADOR', x = 50, y = 50, tamanho = 30, corFonte = '#fff') {
        this.NOME = nome;
        this.texto = texto;
        this.x = x;
        this.y = y;
        this.tamanho = tamanho;
        this.corFonte = corFonte;
	}

  getX() {
    return GlobalManager.getX(this.x, this.getLargura());
  }

  getY() {
    return GlobalManager.getY(this.y, this.getAltura());
  }

  getLargura() {
    return GlobalManager.getLargura(this.tamanho);
  }

  getAltura() {
    return this.getLargura() * 25 / 100;
  }

  getFonte() {
    return GlobalManager.getFonte(this.texto, this.getLargura() * 100 / 100);
  }

	desenhar() {
        const x = this.getX();
        const y = this.getY();
        const largura = this.getLargura();
        const algura = this.getAltura();
        const fonte = this.getFonte();

        GlobalManager.ctx.textAlign = 'center';
        GlobalManager.ctx.textBaseline = 'middle';

        GlobalManager.ctx.fillStyle = this.corFonte;
        //GlobalManager.ctx.imageSmoothingEnabled = true;
        //GlobalManager.ctx.imageSmoothingQuality = 0.0;
        //GlobalManager.canvas.style.imageRendering = 'auto';
        GlobalManager.ctx.font = `900 ${fonte}px system-ui`;
        GlobalManager.ctx.fillText(this.texto, x + largura/2, y + algura/2);
    }

	redimensionar() {
		
	}

	clicou(event) {
		console.log('clicou no texto');
	}
}