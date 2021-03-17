import * as express from 'express';

export const routes = express.Router();
routes.get('/', (req, res) => res.send({"name": "test"}));
routes.get('/users', (req, res) => res.send([]));
routes.post('/users', (req, res) => res.send({ body: req.body }));