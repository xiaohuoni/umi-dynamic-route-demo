import React from "react";
import { withRouter } from "umi";
const Users = React.lazy(() => import("@/pages/users"));

export function patchClientRoutes({ routes }) {
  const Foo = withRouter(Users);
  routes.unshift({
    path: "/foo",
    element: <Foo />,
  });
}
