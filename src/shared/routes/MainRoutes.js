import { lazy } from 'react';
import MainLayout from '../layout/main-layout';
import Loadable from 'shared/components/Loadable';
import PrivateRoute from 'shared/layout/routes/PrivateRoute';

// dashboard routing
const Dashboard = Loadable(lazy(() => import('features/dashboard')));
const MenuDummy = Loadable(lazy(() => import('features/menu-dummy')));

const MainRoutes = {
    path: '/',
    element: <PrivateRoute><MainLayout /></PrivateRoute>,
    children: [
        {
            path: '/dashboard',
            element: <Dashboard title="title text" />
        },
        {
            path: '/dummy',
            element: <MenuDummy />
        },
        {
            path: '/component',
            element: <p>Hello</p>
        }
    ]
}

export default MainRoutes;