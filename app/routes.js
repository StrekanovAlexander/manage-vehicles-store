import { all } from './controllers/brands.js';

const routes = (app) => {
    app.get('/', (req, res) => res.send('Manage vehicles store'));
    app.get('/brands', all);
};

export { routes };