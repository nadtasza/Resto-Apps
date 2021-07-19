/* eslint-disable linebreak-style */
import HomePage from '../views/pages/homepage';
import AboutUs from '../views/pages/about-us';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': HomePage, // default page
  '/homepage': HomePage,
  '/about-us': AboutUs,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
