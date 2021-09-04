import { Switch, BrowserRouter, Redirect, Route, Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import LoginPage from '../app/Auth/LoginPage';
import LandingPage from '../app/LandingPage';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route exact path='/'>
                <Redirect to={ROUTES.LANDING} />
            </Route>
            <Switch>
                <PublicRoute exact path={ROUTES.AUTH_ROUTES.LOGIN} component={LoginPage} />
                <PrivateRoute exact restricted={false} path={ROUTES.LANDING} component={LandingPage} />
                <PrivateRoute component={NoMatch} />
            </Switch>

        </BrowserRouter>
    );
};

const NoMatch = ({ location }: any) => (
    <div>
        <h3>
            No match for <code>{location.pathname}</code>
            <br />
            <Link to={ROUTES.LANDING}>Back To Landing</Link>
        </h3>
    </div>
);

export default Routes;
