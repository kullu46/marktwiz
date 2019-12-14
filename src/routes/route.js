import Login from "../components/login/index";
import Home from "../components/home/index";
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
    }
  ]
};