import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './redux/store';
import CssClasses from './assets/styles/css-classes';
import { CircularProgress, Box } from './components';
import Routes from './routes';
import { useSnakeBar } from './utils/commonFunctions';
import { clearState } from './redux/snackbar/snackbarSlice';
import { getUserSession } from './redux/app/appSlice';

const App = () => {
    const commonClasses = CssClasses();
    const dispatch = useAppDispatch();
    const { isLoading } = useAppSelector((state: any) => state.application);
    const { msg, type } = useAppSelector((state: any) => state.snackbar);
    const { showSuccessMessageAlert, showInformationMessageAlert, showWarningMessageAlert, showErrorMessageAlert } = useSnakeBar();

    useEffect(() => {
        dispatch(getUserSession());
    }, []);

    useEffect(() => {
        if (msg) {
            switch (type) {
                case 'success':
                    showSuccessMessageAlert(msg);
                    break;
                case 'info':
                    showInformationMessageAlert(msg);
                    break;
                case 'warning':
                    showWarningMessageAlert(msg);
                    break;
                case 'error':
                    showErrorMessageAlert(msg);
                    break;
                default:
                    break;
            }
            dispatch(clearState());
        }
    }, [msg, type]);

    return (
        <Box height='100vh' className={isLoading ? commonClasses.dFlexCenter : ''}>
            {isLoading ? (<CircularProgress style={{ margin: 'auto' }} />) : (<Routes />)}
        </Box>
    );
};

export default App;
