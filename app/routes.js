import { brand, home } from './controllers/index.js';

const routes = (app) => {
    app.get('/', home.index);

    app.get('/brands', brand.all);
    app.post('/brands', brand.create);
    app.put('/brands/:id', brand.update);
    app.delete('/brands/:id', brand.remove);
};

export { routes };