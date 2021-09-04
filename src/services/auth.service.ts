import * as ROUTES from '../constants/routes';

export const isAuthRoutes = (url: any) => {
    return Object.values(ROUTES.AUTH_ROUTES).includes(url);
};
export const login = async () => {
    // await axios.get('url');
};
