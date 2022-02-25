import {renderToString} from 'react-dom/server';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  docWrapper: {
    minHeight: 'calc(100vh - 40px)',
    overflowWrap: 'normal',
}}));

function Doc({children}){
    const classes = useStyles()
    return <>
        <main className={classes.docWrapper} dangerouslySetInnerHTML={{__html:`${renderToString(children)}` }}>

        </main>
    </>;

};


export default Doc;
