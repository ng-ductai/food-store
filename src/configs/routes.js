import { lazy } from "react";
import { Redirect } from "react-router-dom";
import { PATH_NAMES } from "../constants";

const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login"));
const Shop = lazy(() => import("../pages/Shop"));
const DetailProduct = lazy(() => import("../pages/DetailProduct"));
const Checkout = lazy(() => import("../pages/Checkout"));
const NotFound = lazy(() => import("../components/NotFound"));

const routes = [
  {
    exact: true,
    path: PATH_NAMES.ROOT,
    component: () => <Redirect to={PATH_NAMES.HOME} />,
  },
  {
    exact: true,
    path: PATH_NAMES.HOME,
    component: Home,
  },

  {
    exact: true,
    path: PATH_NAMES.SHOP,
    component: Shop,
  },
  {
    exact: true,
    path: PATH_NAMES.DETAIL,
    component: DetailProduct,
  },
  {
    exact: true,
    path: PATH_NAMES.CHECKOUT,
    component: Checkout,
  },
  {
    exact: true,
    path: PATH_NAMES.LOGIN,
    component: Login,
  },
  {
    component: NotFound,
  },
];

export default routes;
