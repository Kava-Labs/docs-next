import { Typography } from '@material-ui/core';
import {renderToString} from 'react-dom/server';
import { H1 } from './library/';
import {Box} from './library/Box';
// container to render the markdown file 
function Doc({children}){
    

    return <>
    <H1>
    the H1 is here
    </H1>
        <main dangerouslySetInnerHTML={{__html:`${renderToString(children)}` }}>
        
        </main>
    </>;

};


export default Doc; 