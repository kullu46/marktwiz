import Login from "../components/login/index";
import Home from "../components/home/index";
import Services from "../components/services/index";
import SingleService from "../components/services/single";
export default {
  routes: [
    {
      path: "/login",
      component: Login,
      exact: true
    },
    {
      path: "/",
      component: Home,
      exact: true
    },
    {
      path: "/services",
      component: Services,
      exact: true
    },
    {
      path: "/services/:slug",
      component: SingleService,
      exact: true
    }
  ]
};