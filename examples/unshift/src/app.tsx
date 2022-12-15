import Page from "@/pages/users";
import React from "react";

const Home = React.lazy(() => import("@/pages/users"));

export function patchClientRoutes({ routes }) {
  routes.unshift({
    path: "/foo",
    element: <Home />,
  });
}
