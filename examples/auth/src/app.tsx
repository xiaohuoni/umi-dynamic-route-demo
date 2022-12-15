import React from "react";
import { history } from "umi";
const Home = React.lazy(() => import("@/pages/index"));
const Users = React.lazy(() => import("@/pages/users"));

let extraRoutes: any[] = [];

export function patchClientRoutes({ routes }) {
  extraRoutes.forEach((route) => {
    routes.unshift({
      path: route.path,
      element: route.type === "users" ? <Users /> : <Home />,
    });
  });
}

export function render(oldRender) {
  fetch("/api/checkLogin")
    .then((res) => res.json())
    .then((res) => {
      if (res.isAuth) {
        fetch("/api/routes")
          .then((res) => res.json())
          .then((res) => {
            extraRoutes = res.routes;
            const urlParams = new URL(window.location.href).searchParams;
            const redirect = urlParams.get("redirect");
            if (redirect) {
              history.push(redirect);
            }
            oldRender();
          });
      } else {
        history.push(
          "/login?redirect=" + window.location.pathname + window.location.search
        );
        oldRender();
      }
    });
}
