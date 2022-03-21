import { useRoutes } from "react-router-dom";
import AuthenticationRoutes from "./AuthenticationRoutes";

// routes
import MainRoutes from './MainRoutes';

export default function ThemeRoutes() {
    return useRoutes([AuthenticationRoutes, MainRoutes], '');
}