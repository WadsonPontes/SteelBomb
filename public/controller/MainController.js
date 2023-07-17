const ws = new WebSocket('ws://' + location.host);

ws.onerror = (erro) => {
    console.log(`Erro na conexão: ${erro}`);
}

ws.onclose = (id, descricao) => {
    console.log(`Conexão fechada: ${id} - ${descricao}`);
}

ws.onmessage = (evento) => {
    const dados = JSON.parse(evento.data);

    console.log(dados);
}
