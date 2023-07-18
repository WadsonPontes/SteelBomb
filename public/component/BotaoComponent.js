import { GlobalManager } from '../manager/GlobalManager.js';

export class BotaoComponent {
	constructor(texto = 'VOLTAR', x = 50, y = 50, tamanho = 30, cor = '#C8158D', corFonte = '#fff') {
    this.texto = texto;
    this.x = x;
    this.y = y;
    this.tamanho = tamanho;
    this.cor = cor;
    this.corFonte = corFonte;
	}

	desenhar() {
    const x = GlobalManager.getX(this.x);
    const y = GlobalManager.getY(this.y);
    const largura = GlobalManager.getLargura(this.tamanho);
    const algura = largura * 32 / 100;
    const fonte = GlobalManager.getFonte(this.texto, largura * 55 / 100);

    GlobalManager.ctx.textAlign = 'center';
    GlobalManager.ctx.textBaseline = 'middle';

    GlobalManager.ctx.fillStyle = this.cor;
    GlobalManager.ctx.fillRect(x - largura/2, y - algura/2, largura, algura);

    GlobalManager.ctx.fillStyle = this.corFonte;
    //GlobalManager.ctx.imageSmoothingEnabled = true;
    //GlobalManager.ctx.imageSmoothingQuality = 0.0;
    //GlobalManager.canvas.style.imageRendering = 'auto';
    GlobalManager.ctx.font = `900 ${fonte}px system-ui`;
    GlobalManager.ctx.fillText(this.texto, x, y);
  }

	redimensionar() {
		
	}

	clicou() {
		console.log('clicou no botão');
	}
}