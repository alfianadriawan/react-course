import {
  Home,
  Contact,
  Profile,
  InfoCorona,
  Login,
  Product,
} from "pages/index";

const routes = [
  {
    path: "/home",
    component: Home,
    isPublic: true,
  },
  {
    path: "/contact",
    component: Contact,
    isPublic: true,
  },
  {
    path: "/profile",
    component: Profile,
    isPublic: false,
  },
  {
    path: "/login",
    component: Login,
    isPublic: true,
  },
  {
    path: "/infocorona",
    component: InfoCorona,
    isPublic: true,
  },
  {
    path: "/product",
    component: Product,
    isPublic: false,
  },
  {
    path: "/",
    component: Home,
    isPublic: true,
  },
];

export default routes;
