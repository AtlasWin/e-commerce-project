import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import { useAppSelector } from "../Redux/store/store";
import { privateRoutes, publicRoutes } from "../Router";

function AppRouter() {
  const isAuth = useAppSelector((state) => state.auth.token);
  return (
    <Routes>
      {isAuth
        ? privateRoutes.map((route) => (
            <Route
              element={<route.component />}
              path={route.path}
              key={route.path}
            />
          ))
        : publicRoutes.map((route) => (
            <Route
              element={<route.component />}
              path={route.path}
              key={route.path}
            />
          ))}
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRouter;
