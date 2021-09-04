import CssVariables from '../../../assets/styles/css-variables';
import { Theme, makeStyles } from '../../../components';

export default makeStyles((theme: Theme) => ({
    drawer: {
        width: CssVariables.drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        '& .MuiPaper-root': {
            border: 'unset',
        },
        '& .logo-section': {
            height: CssVariables.headerHeight,
            display: 'flex',
            borderBottomWidth: 3,
            borderBottomStyle: 'solid',
            borderBottomColor: CssVariables.primary,
        },
        '& .sidebar-global-menu': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 30,
            color: CssVariables.white,
            fontSize: 12,
            fontWeight: 600,
            backgroundColor: theme.palette.primary,
            paddingBottom: 3,
        },
        '& .sidebar-menu-list': {
            paddingTop: 0,
            '& .MuiListItem-root': {
                borderBottomWidth: 1,
                borderStyle: 'solid',
                borderColor: CssVariables.borderColor,
                height: 40,
                '& .MuiListItemIcon-root': {
                    minWidth: 12,
                    marginRight: 10,
                    color: 'inherit',
                    '& .MuiSvgIcon-root': {
                        width: 16,
                    }
                },
                '& .MuiListItemText-root': {
                    '& .MuiTypography-root': {
                        fontSize: 14,
                    }
                }
            }
        }
    },
    drawerOpen: {
        width: CssVariables.drawerWidth,
        boxShadow: '0px 0px 15px #0000001A',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    leftContainerLogo: {
        margin: 'auto',
        height: 44,
        '& img': {
            height: '100%'
        }
    },
    content: {
        flexGrow: 1,
        marginTop: CssVariables.headerHeight,
    },
    copyRightSection: {
        height: 51,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 'auto',
        padding: 5,
        borderTopWidth: 1,
        borderTopStyle: 'solid',
        borderTopColor: '#E4E4E4',
        '& img': {
            width: 100,
            marginTop: 8,
            marginBottom: 10
        },
        '& .MuiTypography-body1': {
            color: CssVariables.labelLight,
            fontSize: 9,
            fontFamily: 'Heebo',
            marginBottom: 8
        }
    },
}));
