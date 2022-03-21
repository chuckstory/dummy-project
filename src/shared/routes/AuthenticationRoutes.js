const { default: Login } = require("features/auth/views/Login");


const AuthenticationRoutes = {
    path: '/login',
    element: <Login />
}

export default AuthenticationRoutes;