import { BotaoComponent } from '../component/BotaoComponent.js';

export class MenuPrincipalController {
	constructor() {
    this.componentes = [];
    this.componentes.push(new BotaoComponent('ENTRAR', 50, 50, 15, '#C8158D'));
	}

	desenhar() {
    this.componentes.forEach((value) => {
      value.desenhar();
    });
  }

	redimensionar() {
		
	}

	clicou() {
		
	}
}