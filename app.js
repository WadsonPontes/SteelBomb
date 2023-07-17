import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { WebSocketServer } from 'ws';


import { MainManager } from './server/manager/MainManager.js';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
  if (req.path.endsWith('.js')) {
    res.set('Content-Type', 'application/javascript');
  }
  next();
});

app.get('/', (req, res) => {
  res.sendFile('view/MainView.html', { root: 'public' });
});

app.get('*', (req, res) => {
  res.redirect('/');
});
 
const server = app.listen(process.env.PORT || 3000, () => console.log('Servidor online!'));
const wss = new WebSocketServer({ server });

wss.on('connection', (sock, req) => MainManager.getInstance().novaConexao(sock, req));
