import brand from '../controllers/brand.js';

export default (app) => {
    app.get('/brands', brand.all);
    app.post('/brands', brand.create);
    app.put('/brands/:id', brand.update);
    app.delete('/brands/:id', brand.remove);
}