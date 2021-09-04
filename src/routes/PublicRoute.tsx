import { Route, Redirect } from 'react-router-dom';
import { useAppSelector } from '../redux/store';
import * as ROUTES from '../constants/routes';
import { isAuthRoutes } from '../services/auth.service';
import { authUser } from '../redux/app/appSlice';

const PublicRoute: any = ({ component, ...rest }: { component: any }) => {
    const Component = component;
    const user = useAppSelector(authUser);
    const isAuthenticated = user && user.name ? true : false;
    return (
        <Route {...rest} render={(props: any) => (
            (isAuthRoutes(props.match.url) && isAuthenticated) ? <Redirect to={ROUTES.LANDING} /> : <Component {...props} />
        )} />
    );
};

export default PublicRoute;
