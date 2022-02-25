import { makeStyles } from "@material-ui/core";
import { Box, H2 } from "./library";
import theme from "styles";
// left nav or left panel will contain a link for all the documentations we want to render 

const useStyles = makeStyles(({palette, typography})=>({
    leftNav: {
        backgroundColor: palette.grey[200],
    }
}))

function LeftNav(){
    const classes = useStyles();

    return <>
        <Box width="15%" className={classes.leftNav}>
            <H2>
                left nav
            </H2>

        </Box>
    </>;
};


export default LeftNav; 