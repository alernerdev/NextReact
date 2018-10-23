const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

/* eslint-disable no-console */
app.prepare()
  .then(() => {
    const server = express();

    server.get('/p/:id', (req, res) => {
      // the name of the page matches url from the clientside code
      const actualPage = '/post';
      const queryParams = { title: req.params.id };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('*', (req, res) => handle(req, res));

    server.listen(3000, (err) => {
      if (err) throw err;

      console.log('> Ready on port 3000');
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
