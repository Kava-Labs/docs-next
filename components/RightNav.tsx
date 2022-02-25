import { useState } from "react";
import { Box, Link } from "./library";
import {H3} from './library/Typography';

// right Nav which will be on the right side of the markdown 
type Props = {
    toc : {title : string, id: string}[]
}
function RightNav({toc} : Props){

    const [active, setActive] = useState(0);

    return <>
        <Box display="flex" flexDirection="column" >
            <H3>Table</H3>
            {toc.map(({title, id}, key)=> {
                return <Link key={key} href={"#"+id}>{title}</Link>
            })}
        </Box>
    </>; 
}; 



export default RightNav; 