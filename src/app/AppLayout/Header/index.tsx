// import { useState } from 'react';
import clsx from 'clsx';
import { AppBar, Toolbar, Box, IconButton, } from '../../../components';
import { HelpIcon } from '../../../components/Icons';
// import { useAppDispatch, useAppSelector } from '../../../redux/store';
import useStyles from './styles';

interface IProps {
    open: boolean;
}

const Header = ({ open }: IProps) => {
    const classes = useStyles();
    // const dispatch = useAppDispatch();
    // const { isLoading } = useAppSelector((state: any) => state.application);

    const toggleMenu = (changFunc: any, isOpen: boolean) => () => {
        changFunc(isOpen);
    };

    const logOut = async () => {
        // dispatch(logOut());
    };

    return (
        <AppBar position='fixed' className={clsx(classes.appBar, { [classes.appBarShift]: open })} elevation={0}>
            <Toolbar
            // style={{ borderBottomColor: selectedApp?.themeColor }}
            >

                <Box className={`HeaderTab-root ${classes.superNav}`}>
                    Header works
                    {/* <CorePopper
                        content={AppsMenuContent}
                        open={isAppsMenuOpen}
                        placement='bottom'
                        onClose={toggleMenu(setIsAppsMenuOpen, false)}
                        arrowColor='#005CA8'
                    >
                        <Box className={'super-nav-menu'}>
                            <IconButton onClick={toggleMenu(setIsAppsMenuOpen, !isAppsMenuOpen)}>
                                <AppsIcon />
                            </IconButton>
                        </Box>
                    </CorePopper> */}
                    {/* <CorePopper
                        content={CustomerCentralMenuContent}
                        open={isCustomerCentralMenuOpen}
                        onClose={toggleMenu(setIsCustomerCentralMenuOpen, false)}
                        arrowColor='#A4BF7A'
                    >
                        <Box className={'super-nav-menu'}>
                            <IconButton onClick={toggleMenu(setIsCustomerCentralMenuOpen, !isCustomerCentralMenuOpen)}>
                                <GroupWorkIcon />
                            </IconButton>
                        </Box>
                    </CorePopper> */}
                    <Box className={'super-nav-menu'}>
                        <IconButton>
                            <HelpIcon />
                        </IconButton>
                    </Box>

                    {/* <CorePopper
                        content={ProfileMenuContent}
                        open={isProfileMenuOpen}
                        placement='bottom'
                        onClose={toggleMenu(setIsProfileMenuOpen, false)}
                        arrowColor='#4185C5'
                    >
                        <div>
                            <Button
                                color='default'
                                variant='contained'
                                className='super-nav-menu profile-block'
                                onClick={toggleMenu(setIsProfileMenuOpen, !isProfileMenuOpen)}
                            >
                                <AccountCircleIcon />
                                <Box className='profile-details'>
                                    <Typography className='user-name'>Joe Owner</Typography>
                                    <Typography className='user-role'>The Owner</Typography>
                                </Box>
                            </Button>
                        </div>
                    </CorePopper> */}
                </Box>
            </Toolbar>
        </AppBar >
    );
};

export default Header;
