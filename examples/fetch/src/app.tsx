import React from "react";

const Home = React.lazy(() => import("@/pages/index"));
const Users = React.lazy(() => import("@/pages/users"));

let extraRoutes: any[];

export function patchClientRoutes({ routes }) {
  extraRoutes.forEach((route) => {
    routes.unshift({
      path: route.path,
      element: route.type === "users" ? <Users /> : <Home />,
    });
  });
}

export function render(oldRender) {
  fetch("/api/routes")
    .then((res) => res.json())
    .then((res) => {
      extraRoutes = res.routes;
      oldRender();
    });
}
