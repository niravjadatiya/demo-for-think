
// import { useAppDispatch, useAppSelector } from '../../../redux/store';
// import CssClasses from '../../../assets/styles/css-classes';
// import { BaseSyntheticEvent, ChangeEvent, useState } from 'react';
import { Box } from '../../../components';
import { useStyles } from './styles';

const LoginPage = () => {
    const classes = useStyles();
    // const commonClasses = CssClasses();

    // const dispatch = useAppDispatch();
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    // const onChangeInput = (changFunc: any) => (e: ChangeEvent<HTMLInputElement>) => {
    //     changFunc(e.target.value);
    // };

    return (
        <Box className={classes.root}>
            Login Works
        </Box>
    );
};

export default LoginPage;
