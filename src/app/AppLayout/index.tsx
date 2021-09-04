import { ReactNode, useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import { useAppDispatch } from '../../redux/store';
import { Box } from '../../components';
import useStyles from './styles';
import Header from './Header';
import Sidebar from './Sidebar';

interface IProps {
    children: ReactNode;
}

const AppLayout = ({ children }: IProps) => {
    const classes = useStyles();
    const [open] = useState(true);
    // const dispatch = useAppDispatch();

    return (
        <Box height={1} display='flex'>
            <Header open={open} />
            <Sidebar open={open} />
            <main className={classes.content}>
                {children}
            </main>
        </Box>
    );
};

export default AppLayout;
