/** EXTERNAL DEPENDENCIES */
const express = require('express');
const path = require('path');
const logger = require('morgan');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

/** ROUTERS */
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const recordsRouter = require('./routes/records');

/** INIT */
const app = express();

/** LOGGING */
/* THIS LINE LOGS ALL REQUESTS MADE TO OUR API TO THE CONSOLE */
app.use(logger('dev'));


/** SETTING UP LOWDB */
const adapter = new FileSync('data/db.json');
const db = low(adapter);
db.defaults({ records:[] }).write();


/** REQUEST PARSERS */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/** STATIC FILES*/
app.use(express.static(path.join(__dirname, 'public')));


/** ROUTES */
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/records', recordsRouter);

/** EXPORT PATH */
module.exports = app;
