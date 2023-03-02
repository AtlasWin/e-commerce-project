import Cart from "../Pages/Cart";
import Categories from "../Pages/Categories";
import CategoryById from "../Pages/CategoryById";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import ProductDetails from "../Pages/ProductDetails";
import Products from "../Pages/Products";
import Profile from "../Pages/Profile";
import Registration from "../Pages/Registration";

export const publicRoutes = [
  { path: "/registration", component: Registration, exact: true },
  { path: "/categories", component: Categories, exact: true },
  { path: "/categories/:id", component: CategoryById, exact: true },
  { path: "/login", component: Login, exact: true },
  { path: "/products", component: Products, exact: true },
  { path: "/products/:id", component: ProductDetails, exact: true },
  { path: "/home", component: Home, exact: true },
];

export const privateRoutes = [
  { path: "/registration", component: Registration, exact: true },
  { path: "/categories", component: Categories, exact: true },
  { path: "/categories/:id", component: CategoryById, exact: true },
  { path: "/login", component: Login, exact: true },
  { path: "/products", component: Products, exact: true },
  { path: "/products/:id", component: ProductDetails, exact: true },
  { path: "/cart", component: Cart, exact: true },
  { path: "/profile", component: Profile, exact: true },
  { path: "/home", component: Home, exact: true },
];
