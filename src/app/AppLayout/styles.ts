import CssVariables from '../../assets/styles/css-variables';
import {  makeStyles } from '../../components';

export default makeStyles(( ) => ({
    content: {
        flexGrow: 1,
        marginTop: CssVariables.headerHeight,
        height: 'calc(100% - 64px)',
        overflow: 'auto'
    },
}));
