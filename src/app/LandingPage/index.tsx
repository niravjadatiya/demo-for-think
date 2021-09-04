import { Box } from '../../components';
import useStyles from './styles';
const LandingPage = () => {
    const classes = useStyles();

    return (
        <Box className={classes.container}>
            <Box className={classes.row}>
                Landing page works
            </Box>
        </Box >
    );
};

export default LandingPage;
