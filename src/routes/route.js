import Login from "../components/login/index";
import Home from "../components/home/index";
import Services from "../components/services/index";
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
    }
  ]
};