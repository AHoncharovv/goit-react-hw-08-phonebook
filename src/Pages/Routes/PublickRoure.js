import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import authSelectors from "redux/auth/authSelectors";

export default function PublicRoute({children, restricted = false }) {
    
    const isLoggedIn = useSelector(authSelectors.getIsLogged);
    const shouldRedirect = isLoggedIn && restricted;

    if (shouldRedirect) {
        return <Navigate to='/contacts' replace />
    }
    return children
};