import CssVariables from '../../assets/styles/css-variables';

const style: any = {
    button: {
        backgroundRepeat: 'no-repeat',
        backgroundClip: 'padding-box',
    },
    pink: {
        color: CssVariables.pink,
        backgroundColor: CssVariables.pinkLight,
        '&:hover': {
            backgroundColor: CssVariables.pinkHover,
        }
    },
    green: {
        color: CssVariables.white,
        backgroundColor: CssVariables.green,
        '&:hover': {
            backgroundColor: CssVariables.greenLight,
        }
    }
};
export default style;
