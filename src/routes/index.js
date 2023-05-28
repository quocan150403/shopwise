import config from '~/config/index';
import Home from '~/pages/Home';
import Shop from '~/pages/Shop';

const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.shop, component: Shop },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
