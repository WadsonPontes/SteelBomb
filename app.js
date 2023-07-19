import express from 'express';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { WebSocketServer } from 'ws';
import { MainManager } from './server/manager/MainManager.js';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));
app.use((req, res, next) => {
  if (req.path.endsWith('.js')) {
    res.set('Content-Type', 'application/javascript');
  }
  next();
});

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.get('*', (req, res) => {
  res.redirect('/');
});
 
const server = app.listen(process.env.PORT || 4200, () => console.log('Servidor online!'));
const protocol = window.location.protocol === 'https:' ? 'wss' : 'ws';
const wss = new WebSocketServer({ server, clientTracking: true, perMessageDeflate: false, path: '/ws' });

wss.on('connection', (sock, req) => MainManager.novaConexao(sock, req));
