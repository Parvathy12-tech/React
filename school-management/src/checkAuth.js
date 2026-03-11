import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function checkAuth(Component) {

    return function ProtectedComponent() {

        const user = useSelector(state => state.auth.user);

        if (!user) {
            return <Navigate to="/login" />
        }

        return <Component />
    }

}

export default checkAuth;