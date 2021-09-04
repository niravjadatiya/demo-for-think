import { memo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button, CircularProgress } from '../index';
import { withStyles } from '../index';
import style from './styles';

const styles = () => ({
    root: (props: any) => {
        // if not default type color then we will append `color` style manually
        if (['inherit', 'primary', 'secondary', 'default'].indexOf(props.color) === -1) {
            return ({ ...style.button, ...style[props.color] });
        }
        return ({ ...style.button });
    }
});

const CoreButton = (({ children, disabled = false, color = 'primary', endIcon = null, href = '', isLoading = false, ...otherProps }: any) => {

    // if default type color then we will append `color` props again
    if (['inherit', 'primary', 'secondary', 'default'].indexOf(color) !== -1) {
        otherProps = { ...otherProps, ...{ color } };
    }

    if (href) {
        otherProps = {
            ...otherProps,
            ...{
                component: RouterLink,
                to: href
            }
        };
    }
    return (
        <Button
            disabled={disabled || isLoading}
            endIcon={isLoading ? <CircularProgress size={15} /> : endIcon}
            {...otherProps}
        >
            {children}
        </Button>
    );
});
export default memo(withStyles(styles)(CoreButton));