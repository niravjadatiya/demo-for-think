import { IconButton } from '../components';
import { CloseIcon } from '../components/Icons';
import { useSnackbar } from 'notistack';
import { useLocation } from 'react-router-dom';

export const useQueryParams: any = () => {
    return new URLSearchParams(useLocation().search);
};

export const emailMask = (mail: string, maskEndBefore = 2) => {
    const str = mail.split('');
    const finalArr: any = [];
    const len = str.indexOf('@') - 1;
    str.forEach((item, index: number) => {
        (index >= 0 && index <= len - maskEndBefore) ? finalArr.push('•') : finalArr.push(str[index]);
    });
    return finalArr.join('');
};

export const useSnakeBar = () => {

    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const action = (key: any) => (
        <IconButton size='small' color='inherit' onClick={() => { closeSnackbar(key); }}>
            <CloseIcon fontSize='inherit' />
        </IconButton>
    );

    const defaultOption: any = {
        autoHideDuration: 3000,
        preventDuplicate: true,
        anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'center',
        },
        // content: <h1>test</h1>,
        style: { whiteSpace: 'pre-line' },
        action
    };

    const wrapMessageToHtml = (message: string | React.ReactNode) => {
        return (<span style={{ maxWidth: 470 }}> {message}</span >);
        // return (<span style={{ width: 470, maxWidth: 470, minHeight: 77, display: 'flex', justifyContent: 'center', alignItems: 'center' }}> {message}</span >);
    };

    return {
        showSuccessMessageAlert: (message: string | React.ReactNode, option = {}) => {
            defaultOption.variant = 'success';
            const newOptions = Object.assign({}, defaultOption, option);
            enqueueSnackbar(wrapMessageToHtml(message), newOptions);
        },
        showWarningMessageAlert: (message: string | React.ReactNode, option = {}) => {
            defaultOption.variant = 'warning';
            const newOptions = Object.assign({}, defaultOption, option);
            enqueueSnackbar(wrapMessageToHtml(message), newOptions);
        },
        showErrorMessageAlert: (message: string | React.ReactNode, option = {}) => {
            defaultOption.variant = 'error';
            const newOptions = Object.assign({}, defaultOption, option);
            enqueueSnackbar(wrapMessageToHtml(message), newOptions);
            // playSound('error');
        },
        showInformationMessageAlert: (message: string | React.ReactNode, option = {}) => {
            defaultOption.variant = 'info';
            const newOptions = Object.assign({}, defaultOption, option);
            enqueueSnackbar(wrapMessageToHtml(message), newOptions);
            // playSound('info');
        }
    };

    // export const playSound = (type) => {
    //     let sound;
    //     switch (type) {
    //         case "info":
    //             sound = InfoSound;
    //             break;
    //         case "error":
    //             sound = ErrorSound;
    //             break;
    //         default:
    //             sound = InfoSound;
    //             break;
    //     }
    //     const audio = new Audio(sound);
    //     audio.play();
    //     const handleEvent = () => {
    //         audio.pause();
    //     };
    //     audio.removeEventListener('ended', handleEvent);
    //     audio.addEventListener('ended', handleEvent);
    // };
};
