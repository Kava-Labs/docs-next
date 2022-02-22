import Link from 'next/link';
import React, { useState } from 'react';


export const RenderMe = () => {

    const [count, setCount] = useState(0); 

    return <div>
        <div>
        count: {count} 
        </div>
        
        <div>
        <button onClick={()=> setCount(count++)}>
            Add
        </button>
        </div>

        <div>
            <Link href={"about"}>
            <a>
                I'm bored take me somewhere else
            </a> 
            </Link>
          
        </div>
    </div>
}; 