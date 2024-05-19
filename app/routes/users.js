import user from '../controllers/user.js';

export default (app) => {
    app.get('/users', user.all);
    app.post('/users', user.create);
    app.put('/users/:id', user.update);
    app.delete('/users/:id', user.remove);
}