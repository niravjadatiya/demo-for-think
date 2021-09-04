// TODO: this is material known issue while moving to version 5 it should solve https://stackoverflow.com/a/64135466/3545036
import { createTheme } from '../../components';
import CssVariables from './css-variables';

// Creating a theme instance.
export const theme = createTheme({
    palette: {
        // type: 'dark',
        primary: {
            main: CssVariables.primary
        },
        secondary: {
            main: CssVariables.secondary
        }
    },
    typography: {
        fontFamily: 'Open Sans',
        fontSize: 14,
        // body2: {
        //     fontFamily: 'Times New Roman',
        //     fontSize: '1.1rem'
        // }
    },
    shape: {
        // borderRadius: 50
    },
    spacing: 8,
    overrides: {
        MuiCssBaseline: {
            '@global': {
                a: {
                    color: CssVariables.primary
                }
            },
        },
        MuiButton: {
            root: {
                textTransform: 'none',
                padding: '5px 17px',
                fontWeight: 'bold',
                borderRadius: 18,
                marginRight: 5,
            },
        },
        // MuiOutlinedInput: {
        //     notchedOutline: {
        //         fontSize: 10,
        //     }
        // },
        // MuiInputLabel: {
        //     root: {
        //         fontSize: '12px',
        //         transform: 'translate(14px, 514px) scale(1)'
        //     },
        //     outlined: {
        //         transform: 'translate(20px, 17px) scale(1)'
        //     }
        // },
        MuiTextField: {
            root: {
                fontSize: 10,
                // marginBottom: 14,
                '& .MuiFormLabel-root': {
                    // fontSize: 10,
                    // marginBottom: 6,
                    color: CssVariables.labelLight,
                    // position: 'unset',
                    // transform: 'none',
                },
                // '& .MuiInputBase-root input': {
                // padding: '10.5px 14px',
                // maxHeight: 40
                // },
                // '& .MuiInputBase-root fieldset': {
                // top: 0
                // },
                // '& .MuiInputBase-root fieldset legend': {
                // display: 'none',
                // },
                '& .MuiFormHelperText-root.Mui-error': {
                    margin: 'unset',
                    fontSize: 10,
                    textAlign: 'end',
                },
                '&.Mui-success .MuiInputBase-root fieldset': {
                    // '& .MuiInputLabel-root': {
                    //     color: CssVariables.greenLight
                    // },
                    borderColor: CssVariables.greenLight,
                    // color: CssVariables.greenLight

                },
            }
        },
        MuiLink: {
            root: {
                cursor: 'pointer'
            }
        },
    },
    props: {
        MuiButton: {
            variant: 'contained',
            color: 'primary',
            disableElevation: true
        },
        MuiTextField: {
            fullWidth: true,
            variant: 'outlined',
            InputLabelProps: {
                // shrink: true
            },
            InputProps: {

            },
        },
        MuiCheckbox: {
            color: 'primary'
        },
    }
});
