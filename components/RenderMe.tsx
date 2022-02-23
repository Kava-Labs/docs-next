import Link from 'next/link';
import React, { useState } from 'react';
import {Container} from '../styles/container.style';

export const RenderMe = () => {

    const [count, setCount] = useState(0); 

    return <Container>
        <div>
        count: {count} 
        </div>
        
        <div>
        <button onClick={()=> setCount(count + 1)}>
            Add
        </button>
        </div>

        <div>
            <Link href={"about"}>
            <a>
                route me to about page 
            </a> 
            </Link>
          
        </div>
    </Container>
}; 