
// const { createServer } = require('vite');
// const express = require('express');

// async function startServer() {
//   const app = express();

//   const vite = await createServer({
//     server: { middlewareMode: 'html' },
//   });
//   app.use(vite.middlewares);

//   // Gérer les autres routes d'Express ici

//   app.listen(3000, () => {
//     console.log('Serveur en cours d\'exécution sur http://localhost:3000');
//   });
// }

// startServer();

import { exec } from 'node:child_process'
import open, {openApp, apps} from 'open';
import express from 'express';
import cors from 'cors'

async function runDashboard(bot, portServ, portPage) {

  const server = express()
  const port = portServ

  server.use(cors({
  
    origin: 'http://localhost:5173',
   
  }))

  server.get('/get-bot', (req, res) => {
    res.send( JSON.stringify( bot ) )
  })
  
  exec('npm run dev', { cwd: 'page' }, (error, stdout, stderr) => {
    if (error) {
      console.error(`Erreur lors du démarrage de Vite: ${error}`);
      return;
    }
  });

  server.listen(port, () => {
    console.log(`-> Example app listening on port ${port}`)
  })
  
  setTimeout(async () => {
    await open("http://localhost:5173");
  }, 2500)

}

runDashboard({
  bot: "ExempleDuBot"
}, 3000, 5173)
