import brands from './brands.js';
import home from './home.js';
import users from './users.js';

const routes = (app) => {
    home(app);
    brands(app);
    users(app);
};

export { routes };