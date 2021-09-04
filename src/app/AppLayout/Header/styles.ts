import CssVariables from '../../../assets/styles/css-variables';
import { Theme, makeStyles } from '../../../components';


export default makeStyles((theme: Theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor: CssVariables.headerBackground,
        '& .MuiToolbar-root': {
            borderBottomWidth: 3,
            borderBottomStyle: 'solid',
            borderBottomColor: CssVariables.primary,
            height: CssVariables.headerHeight,
            padding: 0,
            '& .HeaderTab-root': {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                color: CssVariables.white,
                backgroundColor: CssVariables.headerTabsBackground,
                '&.org-selection': {
                    width: 138,
                    transition: 'all 0.3s ease-in-out',
                    '&.Mui-focused': {
                        color: CssVariables.black,
                        backgroundColor: CssVariables.white,
                        '& .MuiInputBase-root': {
                            color: CssVariables.black,
                            '& .MuiAutocomplete-endAdornment': {
                                '& .MuiAutocomplete-popupIndicator': {
                                    color: CssVariables.black,
                                }
                            },
                        }
                    },
                    '& .MuiFormControl-root': {
                        margin: 0,
                        height: '100%',
                        '& .MuiInputBase-root': {
                            height: '100%',
                            padding: 0,
                            fontSize: 12,
                            fontWeight: 'bold',
                            lineHeight: '17px',
                            borderRadius: 0,
                            color: '#F0F0F0',
                            '& .MuiInputBase-input': {
                                padding: 0,
                                paddingLeft: 16,
                                height: '100%',
                            },
                            '& .MuiAutocomplete-endAdornment': {
                                top: 'unset',
                                '& .MuiAutocomplete-popupIndicator': {
                                    color: CssVariables.white,
                                    marginRight: 8,
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    appBarShift: {
        marginLeft: CssVariables.drawerWidth,
        width: `calc(100% - ${CssVariables.drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    organizationPaper: {
        margin: 0,
        '& .MuiAutocomplete-listbox': {
            fontSize: 12,
            lineHeight: '18px',
            fontFamily: 'Heebo',
            '& .MuiAutocomplete-option': {
                height: 18,
                minHeight: 'unset',
                margin: '4px 0',
                padding: '0 10px',
            }
        }
    },
    superNav: {
        padding: '0 0 0 20px',
        '& .super-nav-menu': {
            '&.MuiButtonBase-root': {
                marginRight: 0,
                borderRadius: 0,
                padding: '12.5px 12.5px 12.5px 6px',
                paddingRight: 20,
                background: 'transparent',
                color: CssVariables.white,
                '& .MuiSvgIcon-root': {
                    fontSize: 30,
                    marginRight: 8
                }
            },
            '& .MuiIconButton-root': {
                color: CssVariables.white,
                padding: '17px 6px',
                '& .MuiIconButton-label': {
                    '& .MuiSvgIcon-root': {
                        fontSize: 30,
                        maxHeight: 30,
                        maxWidth: 30,
                    }
                },
            },
            '&.profile-block': {
                display: 'flex',
                '& .MuiIconButton-root': {
                    marginRight: 8,
                },
                '& .profile-details': {
                    textAlign: 'left',
                    '& .user-name': {
                        fontSize: 14,
                        fontWeight: 'bold',
                        fontFamily: 'Arial',
                    },
                    '& .user-role': {
                        fontSize: 12,
                        fontFamily: 'Heebo',
                    }
                },
                // '&:hover': {
                //     transition: 'all 0.3s ease-in-out',
                //     background: '#61616161',
                // }
            },
        }
    },
    appsMenu: {
        display: 'grid',
        width: '100%',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridGap: 10,
        padding: 10,
        '& .app-item': {
            cursor: 'pointer',
            textAlign: 'center',
            height: 140,
            width: 140,
            textDecoration: 'none',
            '& svg': {
                height: 110,
                width: 90,
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
                '& img': {
                    height: '100%',
                    width: '100%'
                }
            },
            '& .MuiTypography-root': {
                fontSize: 13,
                fontFamily: 'Open sans',
                color: CssVariables.labelDark
            },
            '&:hover': {
                boxShadow: '0px 0px 1px #797979',
                transition: 'all 0.3s ease-in-out',
                background: '#efefef',
            }
        }
    },
    menuList: {
        width: 245,
        padding: 0,
        '& .MuiMenuItem-root': {
            height: 40,
            padding: '12px 14px',
            fontSize: 13,
            '& svg': {
                height: 17,
                width: 17,
                marginRight: 10,
                color: CssVariables.orange
            },
            '& .Menu-expand-arrow svg': {
                marginRight: 0,
            },
        }
    },
    submenu: {
        padding: 0,
        '& .MuiMenuItem-root': {
            height: 40,
            padding: '12px 14px',
            fontSize: 13,
            '& svg': {
                height: 17,
                width: 17,
                marginRight: 10,
                color: CssVariables.orange
            },
            '& .Menu-expand-arrow svg': {
                marginRight: 0,
            },
        }
    }
}));
