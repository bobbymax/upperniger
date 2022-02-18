import { grey } from "@material-ui/core/colors"
import { makeStyles } from "@material-ui/core/styles"

const drawerWidth = 290

export const useStyles = makeStyles(theme => ({
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
    },
    drawer: {
        width: drawerWidth,
        border: "none !important",
        whiteSpace: 'nowrap',
        height: '100vh',
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerModal: {
        width: 720,
        height: '100vh',
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    sideDrawerContainer: {
        padding: '20px !important'
    },
    appBar: {
        zIndex: `${theme.zIndex.drawer}px ${+ 1} !important`,
        backgroundColor: `${grey[50]} !important`,
        color: "#1c1c1c !important",
        padding: '10px 0 !important',
        boxShadow: 'none !important',
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    appBarOpened: {
        marginLeft: `${drawerWidth}px !important`,
        width: `calc(100% - ${drawerWidth}px) !important`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    appBarBox: {
        boxShadow: 'none !important'
    },
    appBarCollapsed: {
        marginLeft: `${theme.spacing(9)}px !important`,
        width: `calc(100% - ${theme.spacing(9)}px) !important`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    mainContainer: {
        zIndex: `${theme.zIndex.drawer}px ${+ 1} !important`,
        height: '100vh !important',
        marginTop: `${theme.spacing(12)}px !important`,
        overflow: 'hidden !important',
        whiteSpace: 'nowrap',
    },
    contentContainer: {
        marginTop: theme.spacing(4)
    },
    contentCard: {
        marginBottom: '20px !important'
    },
    cardTopText: {
        fontSize: `14px !important`
    },
    cardTextTitle: {
        whiteSpace: 'nowrap !important'
    },
    addCardContent: {
        backgroundColor: `${theme.palette.primary.main} !important`,
        padding: '43px 0 !important'
    },
    addCardContentIcon: {
        margin: '0 auto !important',
        color: `${theme.palette.getContrastText(theme.palette.primary.main)} !important`
    },
    logoContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: theme.spacing(6)
    },
    iconBttnColor: {
        color: "#242020 !important" 
    },
    logo: {
        width: '50%',
        cursor: 'pointer'
    },
    loginLogo: {
        width: '45%'
    },
    formGap: {
        marginBottom: theme.spacing(3)
    },
    loginFormContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    },
    formContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.palette.secondary.main
    },
    bttnFront: {
        textAlign: 'center',
        marginTop: theme.spacing(6)
    },
    navigationDrawerCollapse: {
        width: `${theme.spacing(9)}px !important`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    navigationToolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: theme.spacing(1),
        ...theme.mixins.toolbar,
    },
    navigationToolbarCollapse: {
        justifyContent: 'center',
        paddingRight: 0
    },
    navigationList: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1
    },
    navigationTextSmall: {
        display: 'none'
    },
    navigationText: {
        textTransform: 'uppercase'
    },
    menuItem: {
        width: "80% !important",
        borderRadius: `${theme.spacing(1)}px !important`,
        marginBottom: `${theme.spacing(1)}px !important`,
        color: "#95a5a6",
        padding: "2px 6px !important"
    },
    menuItemActive: {
        backgroundColor: `${theme.palette.primary.main} !important`,
        color: `${theme.palette.getContrastText(theme.palette.primary.main)} !important`
    },
    menuListIcon: {
        color: `${theme.palette.getContrastText(theme.palette.primary.main)} !important`
    },
    menuListIconActive: {
        color: "#ecf0f1"
    },
    title: {
        flexGrow: "1 !important",
    }
}))