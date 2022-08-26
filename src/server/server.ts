import path from 'path';
import express from 'express';
import passport from 'passport';
import routes from './routes';
import './passport';
import { globalErrorHandler, notFoundHandler } from './middlewares';

// server globals
const CLIENT_ROUTES = ['/', '/profile', '/login'];
const PUBLIC_PATH = path.join(__dirname, '../public/index.html');
const PORT = process.env.PORT || 3000;

const app = express();

// status checkpoints
app.get('/status', (req, res) => res.sendStatus(200));
app.head('/status', (req, res) => res.sendStatus(200));

// middlewares
app.use(express.static('public'));
app.use(express.json());
app.use(passport.initialize());

// routes
app.use(routes);
app.get(CLIENT_ROUTES, (req, res) => res.sendFile(PUBLIC_PATH));

// custom error handlers
app.use(notFoundHandler);
app.use(globalErrorHandler);

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
