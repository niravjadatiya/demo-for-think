import clsx from 'clsx';
// import { useAppSelector } from '../../../redux/store';
import { Box, Drawer, Typography } from '../../../components';
import useStyles from './styles';

interface IProps {
    open: boolean;
}

const Sidebar = ({ open }: IProps) => {
    const classes = useStyles();
    // const selectedApp = useAppSelector(selectedApplication);

    return (
        <Drawer
            variant='permanent'
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            })}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                }),
            }}
        >
            {/* <Box className='sidebar-global-menu' style={{ backgroundColor: selectedApp?.themeColor }}>
                {selectedApp && <selectedApp.logo size='large' fillColor={selectedApp?.themeColor} style={{ fontSize: 19, marginRight: 6 }} />}
                {selectedApp?.title}
            </Box> */}
            <Box className={classes.copyRightSection}>
                {/* <img src={imgLogo} alt='Logo' /> */}
                <Typography>© 2021 Company Name, All rights reserved</Typography>
            </Box>
        </Drawer>
    );
};

export default Sidebar;
