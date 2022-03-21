
import { Navigate } from "react-router-dom";
import { useAuth } from "shared/hooks/useAuth";


const PrivateRoute = ({children}) => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return children;
}

export default PrivateRoute;