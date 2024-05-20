import brand from '../controllers/brand.js';
import auth from '../middleware/auth.js'

export default (app) => {
    app.get('/brands', auth, brand.all);
    app.post('/brands', auth, brand.create);
    app.put('/brands/:id', auth, brand.update);
    app.delete('/brands/:id', auth, brand.remove);
}