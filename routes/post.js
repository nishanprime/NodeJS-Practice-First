import express from 'express';
const routes = express.Router();

routes.get('/', (req, res) => {
  res.send('This is coming from get of post');
});

routes.post('/', (req, res) => {
  res.send('This is coming from post route of Posts');
});

export default routes;
