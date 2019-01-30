const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const apolloServer = require('./apollo');
require('./knex.init');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

apolloServer.applyMiddleware({ app, path: '/' });

module.exports = app;
