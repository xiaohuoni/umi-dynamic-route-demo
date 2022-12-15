if (!global.auth) {
  global.auth = false;
}

const getAuth = () => {
  return global.auth;
};

export default {
  "/api/routes": {
    routes: [
      { path: "/foo", type: "home" },
      { path: "/users", type: "users" },
    ],
  },
  "/api/checkLogin": async (req, res) => {
    res.send({
      isAuth: getAuth(),
    });
  },
  "/api/login": async (req, res) => {
    global.auth = true;
    res.send({
      success: true,
    });
  },
};
