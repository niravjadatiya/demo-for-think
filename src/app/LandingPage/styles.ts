import CssVariables from '../../assets/styles/css-variables';
import { makeStyles } from '../../components';

export default makeStyles(() => ({
    container: {
        flex: 1,
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: '13px 0 0 20px ',
    },
    row: {
        display: 'inline-flex',
        width: 'fit-content',
        minHeight: 100,
        borderStyle: 'solid',
        borderRadius: 8,
        borderColor: '#E4E4E4',
        background: CssVariables.white,
        borderWidth: 1,
        padding: 20,
    },
}));
