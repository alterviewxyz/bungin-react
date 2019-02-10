/* eslint-disable no-console */
const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('/p/:slug', (req, res) => {
      const actualPage = '/singlePodcastStation';
      const queryParams = { slug: req.params.slug };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('/user/:username', (req, res) => {
      const actualPage = '/singleUser';
      const queryParams = { username: req.params.username };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('/editPodcast/:slug', (req, res) => {
      const actualPage = '/editPodcastStation';
      const queryParams = { slug: req.params.slug };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('*', (req, res) => handle(req, res));

    server.listen(3000, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
