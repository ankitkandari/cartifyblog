const createError = require('http-errors');
const express = require('express');
const layouts = require('express-ejs-layouts');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const session = require('express-session');
const passport = require('passport');
const { loginHandler } = require('./auth/passport');

const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');
const frontRouter = require('./routes/front');

const app = express();
dotenv.config();
const database = process.env.MONGO_URI;

loginHandler(passport);

mongoose.connect(database, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('Mongo DB connected'))
    .catch((err) => console.log('Mongo DB connection error ', err));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(layouts);
app.set('layout', 'layout/front');
app.use(express.static(path.join(__dirname, 'public')));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use(session({
    secret: 'oneboy',
    saveUninitialized: true,
    resave: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next) => {
    res.locals.isAuthenticated = req.isAuthenticated();
    next();
});

app.use('/auth', authRouter);
app.use('/u', userRouter);
app.use('/', frontRouter);

app.use(function(req, res, next) {
    next(createError(404));
});
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.send(err.message);
});

module.exports = app;