const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');
const bodyParser = require('body-parser');
const route = require('./routes/cards.js');
const db = require('./models');
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/api', route);
const Card = db.card;

// Check to see what dev environment we are in
const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;

if (isDeveloping) {
  app.set('host', 'http://localhost');
  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false,
    },
  });
  const response = (req, res) => {
    res.write(middleware.fileSystem.readFileSync(path.resolve(__dirname, 'dist/index.html')));
    res.end();
  };

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  app.get('*', response);
} else {
  app.use(express.static(`${__dirname}/dist`));
  app.get('*', (req, res) => {
    res.write(
      fs.readFileSync(path.resolve(__dirname, 'dist/index.html'))
    );
  });
}

const onStart = (err) => {
  if (err) {
    throw new Error(err);
  }
  console.info(
    `==> 🌎 Listening on port ${port}. ` +
    `Open up http://localhost:${port}/ in your browser.`
  );
};

app.listen(port, 'localhost', onStart);