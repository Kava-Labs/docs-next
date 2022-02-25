import { makeStyles } from "@material-ui/core";
import { Box, H2 } from "./library";

// left nav or left panel will contain a link for all the documentations we want to render 

const useStyles = makeStyles(({palette, typography, spacing})=>({
    doc: {
        width: "70%",
        padding: spacing(1),
        paddingLeft: spacing(3),
    }
}))

// container to render the markdown file 
type Props = {
    html : string
}

function Doc({html} : Props){
    const classes = useStyles();
   
    return <>
        <main className={classes.doc} dangerouslySetInnerHTML={{__html: html }}>

        </main>
    </>;

};


function transformHtml(htmlStr : string){

};

export default Doc; 