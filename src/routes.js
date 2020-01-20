const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

routes.get('/', (req, res) => {
  return res.json({ok: true});
});

// Devs
routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

//Search
routes.get('/search', SearchController.index);


module.exports = routes;