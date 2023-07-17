const express = require('express');
const path = require('path');
const socket = require('ws');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile('view/MainView.html', { root: 'public' });
});

app.get('*', (req, res) => {
  res.redirect('/');
});
 
const server = app.listen(process.env.PORT || 3000, () => console.log('Servidor online!'));
const ws = new socket.Server({ server });

const MainManager = require('./server/manager/MainManager');

ws.on('connection', (wss, req) => MainManager.getInstance().novaConexao(wss, req));
