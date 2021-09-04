import { Route, Redirect } from 'react-router-dom';
import { isAuthRoutes } from '../services/auth.service';
import AppLayout from '../app/AppLayout';
import * as ROUTES from '../constants/routes';
import { useAppSelector } from '../redux/store';
import { authUser } from '../redux/app/appSlice';

const PrivateRoute: any = ({ component, ...rest }: { component: any, restricted: boolean }) => {
    const Component = component;
    const user = useAppSelector(authUser);
    const isAuthenticated = user && user.name ? true : false;

    return (
        <Route {...rest} render={(props: any) => (
            (!isAuthRoutes(props.match.url) && isAuthenticated)
                ? <AppLayout><Component {...props} /></AppLayout> : <Redirect to={ROUTES.AUTH_ROUTES.LOGIN} />
        )} />
    );
};

export default PrivateRoute;
