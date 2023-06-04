import config from 'config';
import Home from 'pages/Home';
import Shop from 'pages/Shop';
import About from 'pages/About';
import Contact from 'pages/Contact';
import Cart from 'pages/Cart';
import Checkout from 'pages/Checkout';
import ProductDetail from 'pages/ProductDetail';
import Login from 'pages/Login';
import Signup from 'pages/Signup';
import NotFound from 'pages/NotFound';

const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.shop, component: Shop },
  { path: config.routes.about, component: About },
  { path: config.routes.contact, component: Contact },
  { path: config.routes.cart, component: Cart },
  { path: config.routes.checkout, component: Checkout },
  { path: config.routes.productDetail + '/:id', component: ProductDetail },
  { path: config.routes.login, component: Login },
  { path: config.routes.signup, component: Signup },
  { path: config.routes.notFound, component: NotFound },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
