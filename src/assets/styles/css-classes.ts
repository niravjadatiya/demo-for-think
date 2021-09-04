import { makeStyles } from '../../components';
import CssVariables from './css-variables';

// All common css classes like form button will be defined here centrally
const CssClasses = makeStyles(() => ({
    dFlexCenter: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    pinkButton: {
        color: CssVariables.pink,
        backgroundColor: CssVariables.pinkLight,
        backgroundRepeat: 'no-repeat',
        backgroundClip: 'padding-box',
        '&:hover': {
            backgroundColor: CssVariables.pinkHover,
        }
    },
    textFieldCustom: {
        marginBottom: 14,
        '& .MuiFormLabel-root': {
            fontSize: 10,
            marginBottom: 6,
            color: CssVariables.labelLight,
            position: 'unset',
            transform: 'none',
        },
        '& .MuiInputBase-root input': {
            padding: '10.5px 14px',
            maxHeight: 40
        },
        '& .MuiInputBase-root fieldset': {
            top: 0
        },
        '& .MuiInputBase-root fieldset legend': {
            display: 'none',
        },
    }
}));

export default CssClasses;
