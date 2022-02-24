import {renderToString} from 'react-dom/server';
import {Box} from './library/Box';
// container to render the markdown file 
function Doc({children}){
    

    return <>
    <Box>
    the box is here
    </Box>
        <main dangerouslySetInnerHTML={{__html:`${renderToString(children)}` }}>
        
        </main>
    </>;

};


export default Doc; 