import home from '../controllers/home.js';

export default (app) => {
    app.get('/', home.index);
}